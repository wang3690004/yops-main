<template>
  <div class="login-wrapper">
    <Header :isLogin="true" />
    <div class="login-content">
      <div class="login-img">
        <img src="../../assets/images/login.png" alt="">
      </div>
      <div class="login-form-wrapper">
        <ldap-login-form />
      </div>
    </div>
    <p class="copyright">{{ copyright }}</p>
  </div>
</template>

<script>
import LdapLoginForm from "./components/LdapLoginForm";
import Header from "@/views/layout/components/Header";

export default {
  name: "Login",
  components: { LdapLoginForm, Header },
  data() {
    return {
      copyright: "",
    };
  },
  created() {
    this.copyright = "Copyright©" + new Date().getFullYear() + " 厦门亿联网络技术股份有限公司 All rights reserved";
  },
};
</script>

<style lang="less">

.login-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  .login-content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 150px;

    .login-img {
      margin-right: 150px;
    }

    .login-form-wrapper {
      box-sizing: border-box;
      width: 400px;
      height: 420px;
      padding: 50px;
      border-radius: 5px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
      background-color: rgba(255, 255, 255, 0.9);
      .ant-input {
        border: none;
        border-bottom: 1px solid #EAEAEA;
        line-height: 50px;
        border-radius: 0;
        padding-left: 40px;
        &:focus {
          box-shadow: none;
        }
      }

      .anticon {
        font-size: 16px;
      }

      p {
        margin-bottom: 32px;
        font-size: 24px;
        color: #1A1A1A;
        font-weight: 600;
      }
      // .remember-password {
      //   margin: 0 0 20px 10px;
      // }
      // .login-form-button {
      //   line-height: 44px;
      //   height: 44px;
      // }
      // .change-login-btn {
      //   cursor: pointer;
      //   &:hover {
      //     color: #1f89e4;
      //   }
      // }
    }
  }
}

.copyright {
  text-align: center;
  line-height: 60px;
  color: #1A1A1A;
}
</style>
