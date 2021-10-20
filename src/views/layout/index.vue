<template>
  <a-layout id="layoutbasement">
    <Header />
    <a-layout>
      <layout-content />
    </a-layout>
  </a-layout>
</template>

<script>
import Header from "./components/Header";
import LayoutContent from "./components/Content";

export default {
  components: { Header, LayoutContent },
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
