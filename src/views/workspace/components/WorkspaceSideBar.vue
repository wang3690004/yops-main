<template>
  <SideBar :menus="menus">
    <template slot="extra">
      <p class="workspace-sidebar-title">Kubernets管理与访问</p>
    </template>
  </SideBar>
</template>

<script>
import SideBar from "@/views/layout/components/SideBar";
import { mapState } from "vuex";
export default {
  components: { SideBar },
  data() {
    return {
      menus: [],
    };
  },
  computed: {
    ...mapState({ mainMenu: (state) => state.account.addRouters[0] }),
  },
  created() {
    let routes = [];
    routes = this.mainMenu.children.find((item) => item.name === "workspace");
    this.menus = (routes && routes.children) || [];
  },
};
</script>

<style lang="less" scoped>
.workspace-sidebar-title {
  padding-left: 24px;
  height: 40px;
  line-height: 40px;
  font-weight: 600;
  font-size: 15px;
  border-bottom: 1px solid #e3e3e3;
}
</style>
