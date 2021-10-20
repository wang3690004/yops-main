import Vue from "vue";
import axios from "axios";
import message from "ant-design-vue/es/message";
import { ACCESS_TOKEN } from "@/store/mutation-types";
import $t from "@/i18n/index";

const service = axios.create();
service.defaults.baseURL = "/api/v1";
service.defaults.timeout = 60000;
// service.defaults.headers["Content-type"] = "application/json;charset=UTF-8";

export const getErr = (response) => {
  let error = response.error;
  let msg = error.msg;
  if (error.fieldErrors && error.fieldErrors[0]) {
    msg = error.fieldErrors[0].msg;
  }
  return msg;
};

const removeLS = () => {
  sessionStorage.clear();
  localStorage.clear();
};

const err = (error) => {
  if (error.response) {
    const data = error.response.data;
    if (error.response.status === 403) {
      message.error(data.message);
    }
    if (error.response.status === 401) {
      message.error("Authorization verification failed");

      // self.location = "/";
      // store.dispatch('Logout').then(() => {
      //   setTimeout(() => {
      //     window.location.reload()
      //   }, 1500)
      // })
    }
  }
  return Promise.reject(error);
};

service.interceptors.request.use((config) => {
  const token = Vue.ls.get(ACCESS_TOKEN);
  if (token) {
    config.headers["token"] = token;
  }
  if (config.headers["Content-type"] === "multipart/form-data") {
    return config;
  }

  if (config.headers["Content-type"] === "application/octet-stream") {
    return config;
  }

  return config;
}, err);

service.interceptors.response.use((response) => {
  if (response.config && response.config.responseType === "blob") {
    return response;
  } //二进制流返回

  if (Object.prototype.toString.call(response.config.data) === "[object Blob]" && response.config.method === "put") {
    return response;
  } //阿里云文件上传使用put，文件上传成功没有返回值  需要依靠状态码判断文件上传是否成功

  let res = response.data;
  if (res.ret < 0) {
    let msg = getErr(res);
    if (!response.config.hideWarn) {
      message.error($t(msg) ? $t(msg) : msg);
    }
    if (msg === "service.common.token.unauthorized") {
      setTimeout(() => {
        self.location = "/login";
        removeLS();
      }, 500);
    }
  }
  return res;
}, err);

export default {
  get: (url, data, config) => service.get(url + (!!window.ActiveXObject || "ActiveXObject" in window ? `?T=${new Date().getTime()}` : ""), { params: data ? data : {}, ...config }),
  put: (url, data, config) => service.put(url, data, config),
  post: (url, data, config) => service.post(url, data, config),
  delete: (url, data, config) => service.delete(url, { data, config }),
};
