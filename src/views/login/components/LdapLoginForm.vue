<template>
  <div>
    <p>{{ loginTitle }}</p>
    <a-form id="login-form-standard" :form="form" @submit="handleSubmit">
      <a-form-item>
        <a-input v-decorator="decorator.userName" :maxLength="32" :placeholder="placeholder">
          <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, 0.25)" />
        </a-input>
      </a-form-item>
      <a-form-item class="mb8">
        <a-input-password v-decorator="decorator.password" :maxLength="50" type="password" placeholder="密码">
          <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
        </a-input-password>
      </a-form-item>
      <div class="remember-password flex-between">
        <a-checkbox v-model="remember">记住密码</a-checkbox>
        <div class="change-login-btn link" @click="handleType">{{ changeText }}</div>
      </div>
      <a-form-item>
        <a-button type="primary" html-type="submit" class="login-form-button" block>登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
// import JSEncrypt from "jsencrypt";
// import crypto from "@/utils/crypto";
// import { PUBLIC_KEY } from "@/utils/constants/constconstants";
import Vue from "vue";
import { mapActions } from "vuex";
// import md5 from "md5";
import { isEnable } from "@/apis/login";
import { cloneDeep } from "lodash";
import { isEmpty } from "@/utils/util";

export default {
  name: "LdapLoginForm",
  data() {
    return {
      form: this.$form.createForm(this),
      decorator: {
        userName: [
          "userName",
          {
            rules: [
              { required: true, message: "请输入账号" },
              { pattern: /^[0-9a-zA-Z_]{1,}$/, message: "请输入正确的账号" },
            ],
          },
        ],
        password: [
          "password",
          {
            rules: [{ required: true, message: "请输入密码" }],
          },
        ],
      },
      remember: false,
      // type: "LDAP"
    };
  },
  computed: {
    changeText() {
      return this.type === "LDAP" ? "账号登录" : "AD登录";
    },
    loginTitle() {
      return this.type === "LDAP" ? "AD登录" : "账号登录";
    },
    placeholder() {
      return this.type === "LDAP" ? "域账号" : "账号";
    },
  },
  created() {
    // this.isAdEnabled();
  },
  mounted() {
    const userInfo = Vue.ls.get("YOPS_LOGIN_INFO");
    if (userInfo) {
      this.type = userInfo.type;
      this.form.setFieldsValue({
        userName: userInfo.userName,
        password: userInfo.password,
      });
      this.remember = true;
    }
  },
  methods: {
    ...mapActions(["Login"]),
    isAdEnabled() {
      isEnable().then((res) => {
        if (res.ret >= 0) {
          this.enableAD = res.data;
        } else {
          this.enableAD = false;
        }
      });
    },
    handleType() {
      this.type = this.type === "LDAP" ? "STANDARD" : "LDAP";
    },
    handleSubmit(e) {
      e.preventDefault();

      let loginParams = null;
      this.form.validateFields((err, values) => {
        if (!err) {
          loginParams = { ...values };
          // loginParams.password = loginParams.password;
          // loginParams.remember = this.remember;
          // loginParams.type = this.type;

          // if (this.type === "LDAP") {
          //   loginParams.password = this.rsaEncode(loginParams.password);
          // } else {
          //   loginParams.password = md5(loginParams.password);
          //   loginParams.type = this.type;
          // }
        }
      });
      this.doSubmit(loginParams);
    },
    // rsaEncode(str) {
    //   var encrypt = new JSEncrypt();
    //   encrypt.setPublicKey(PUBLIC_KEY);
    //   return encrypt.encrypt(str);
    // },
    doSubmit(loginParams) {
      this.loginInfo = cloneDeep(loginParams);
      // delete loginParams.remember;
      // delete loginParams._password;

      if (isEmpty(loginParams)) {
        return;
      }

      this.Login(loginParams)
        .then((res) => this.loginSuccess(res))
        .catch((err) => this.requestFailed(err));
    },
    loginSuccess(res) {
      
      if (res.ret >= 0) {
        console.log(res)
        // this.setRemember();
        if (this.$route.query && this.$route.query.redirect) {
          this.$router.push({ path: this.$route.query.redirect }, () => {});
        } else {
          this.$router.push({ name: "basicLayout" }, () => {});
        }
      }
    },

    // setRemember() {
    //   const { remember, userName, password, type } = this.loginInfo;
    //   if (remember) {
    //     const info = {
    //       name: userName,
    //       key: crypto.encrypt(password),
    //       type,
    //     };
    //     Vue.ls.set(`YOPS_LOGIN_INFO`, info, 1000 * 60 * 60 * 24 * 30);
    //   } else {
    //     Vue.ls.set(`YOPS_LOGIN_INFO`, "");
    //   }
    // },
    requestFailed(err) {
      this.$notification["error"]({
        message: "错误",
        description: ((err.response || {}).data || {}).message || "请求出现错误，请稍后再试",
        duration: 4,
      });
    },
  },
};
</script>
