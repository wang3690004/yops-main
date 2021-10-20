<template>
  <a-layout-header class="layout-nav-header flex-between">
    <div class="flex-between" style="align-items: center">
      <p style="width: 250px" class="flex-center font-bold cursor logo-text" @click="$router.push({ name: 'basicLayout' })">
        <img src="../../../assets/images/logo.png" alt="" />
        <span class="ml10">Yealink研发协作平台</span>
        <a-divider type="vertical" />
      </p>
      <slot name="nav"></slot>
      <a-popover :destroyTooltipOnHide="true" trigger="click" placement="rightBottom" overlayClassName="status-popover">
        <template slot="content">
          <div>Kubernets管理与访问</div>
          <div>资产管理</div>
          <div>监控管理</div>
        </template>
        <span style="font-size: 15px; cursor: pointer">
          运维管理系统
          <a-icon type="down" />
        </span>
      </a-popover>
    </div>

    <div class="flex-between" v-if="!isLogin">
      <div>
        <slot name="right-btn"></slot>
      </div>

      <a-tooltip title="问题反馈">
        <a href="https://gitcode.yealink.com/open_source/issues/worklink/issues " target="_blank">
          <a-icon class="mr8" type="question-circle" />
        </a>
      </a-tooltip>

      <a-dropdown class="ml10" :trigger="['click']">
        <span class="avatar-box cursor flex-center">
          <Avatar :src="avatar" v-if="avatar !== null && avatar !== undefined && avatar !== ''" />
          <Avatar v-else :name="name" />
          <span class="user-name ellipsis" :title="name">{{ name }}</span>
        </span>
        <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
          <a-menu-item key="2" v-if="isAdmin()">
            <div @click="handleControl">
              <a-icon type="audit" />
              <span>管理员视图</span>
            </div>
          </a-menu-item>
          <a-menu-item key="3" v-if="isAdmin()">
            <div @click="handleControl">
              <a-icon type="audit" />
              <span>普通人员视图</span>
            </div>
          </a-menu-item>
          <a-menu-item key="4">
            <div @click="handleLogout">
              <a-icon type="logout" />
              <span>退出登录</span>
            </div>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </a-layout-header>
</template>

<script>
import Vue from "vue";
import { mapActions } from "vuex";
import { USER_INFO } from "@/store/mutation-types";
import Avatar from "@/components/Avatar";

export default {
  components: { Avatar },
  props: {
    isLogin: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      avatar: Vue.ls.get(USER_INFO) ? Vue.ls.get(USER_INFO).avatar : "",
      name: Vue.ls.get(USER_INFO) ? Vue.ls.get(USER_INFO).name : "",
    };
  },

  methods: {
    ...mapActions(["Logout"]),
    isAdmin() {
      return "ADMIN";
      // const user = Vue.ls.get(USER_INFO);
      // return user.type === "ADMIN";
    },
    handleLogout() {
      this.Logout({})
        .then(() => {
          this.$router.push({
            name: "login",
          });
        })
        .catch(() => {});
    },
    handleControl() {
      this.$router.push({
        name: "controlWorkspace",
      });
    },
  },
};
</script>
<style lang="less">
.layout-nav-header.ant-layout-header {
  border-bottom: 1px solid #d7d7d7;
  background: #001529;
  padding: 0 20px 0 12px;
  height: 50px;
  font-size: 18px;
  line-height: normal;
  color: #fff;
  .logo-text {
    font-size: 18px;
  }
  .avatar-box {
    .ant-avatar {
      font-size: 30px;
      height: 30px;
    }
  }
  .user-name {
    margin-left: 8px;
    font-size: 14px;
    max-width: 70px;
    display: inline-block;
  }
}
.user-dropdown-menu-wrapper {
  width: 150px;
  .anticon {
    margin-right: 10px;
    font-size: 16px;
  }
}
</style>
