<template>
  <a-layout id="layoutbasement">
    <workspace-side-bar />
    <router-view></router-view>
  </a-layout>
</template>

<script>
import WorkspaceSideBar from "./components/WorkspaceSideBar";

export default {
  components: { WorkspaceSideBar },
  data() {
    return {};
  },
};
</script>

<style lang="less">
#layoutbasement {
  height: 100%;
  .ant-layout-content {
    height: 100%;
  }
}
.ant-layout {
  background: #f0f3f6;
}
</style>
