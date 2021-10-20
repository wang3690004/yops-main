import Vue from "vue";
import { login, logout } from "@/apis/login";
import { mockLogin } from "@/apis/mock";
import { ACCESS_TOKEN } from "@/store/mutation-types";
import { constantRouterMap, asyncRouterMap } from "@/router/routemap";

function hasPermission(role, route) {
  if (route.meta && route.meta.permission && route.meta.permission.length > 0) {
    if (route.meta.permission.includes(role)) {
      return true;
    } else {
      return false;
    }
  }
  return true;
}

function filterAsyncRouter(routerMap, role) {
  let accessedRouters = routerMap.filter((route) => {
    if (hasPermission(role, route)) {
      if (route.children && route.children.length > 0) {
        route.children = filterAsyncRouter(route.children, role);
      }
      return true;
    }
    return false;
  });
  return accessedRouters;
}

const account = {
  state: {
    userInfo: "",
    token: "",
    name: "",
    avatar: "",
    permission: "",
    role: "",
    info: {},
    routers: constantRouterMap,
    addRouters: [],
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_USER_INFO: (state, data) => {
      state.userInfo = data;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, role) => {
      state.role = role;
    },
    SET_INFO: (state, info) => {
      state.info = info;
    },
    SET_PERMISSION: (state, permission) => {
      state.permission = permission;
    },
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers;
      state.routers = constantRouterMap.concat(routers);
    },
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        mockLogin(userInfo)
          .then((response) => {
            if (response.ret >= 0) {
              const result = response.data;
              console.log(result);
              // 用户信息-保存24小时 * 7
              Vue.ls.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000);
              Vue.ls.set("YOPS_PERMISSION", result.currentAuthority, 7 * 24 * 60 * 60 * 1000);
              // 登陆清空权限，permission.js 进current 重新获取
              commit("SET_PERMISSION", "");

              commit("SET_TOKEN", result.token);
            }
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    // GetInfo({ commit }) {
    //   return new Promise((resolve, reject) => {
    //     current().then(response => {
    //       if (response.ret >= 0) {
    //         const result = response.data;

    //         commit("SET_NAME", result.username);
    //         commit("SET_ROLES", result.type);
    //         commit("SET_PERMISSION", result.type);
    //         commit("SET_USER_INFO", result);
    //         commit("SET_AVATAR", result.avatar);
    //       }
    //       resolve(response);
    //     }).catch(error => {
    //       reject(error);
    //     });
    //   });
    // },

    GenerateRoutes({ commit }, data) {
      return new Promise((resolve) => {
        let { role } = data;
        let accessedRouters = filterAsyncRouter(asyncRouterMap, role);
        // console.log(accessedRouters, role);
        commit("SET_ROUTERS", accessedRouters);
        resolve();
      });
    },

    // 登出
    Logout({ commit, state }) {
      return new Promise((resolve) => {
        logout(state.token)
          .then(() => {
            commit("SET_TOKEN", "");
            // commit("SET_ROLES", "");
            sessionStorage.clear();
            localStorage.clear();
            console.log("退出登录");
            resolve();
          })
          .catch(() => {
            resolve();
          });
      });
    },
  },
};

export default account;
