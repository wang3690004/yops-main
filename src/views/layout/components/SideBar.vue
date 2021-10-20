<template>
  <a-layout-sider :style="{ overflow: 'hidden auto', border: '1px solid #e3e3e3' }" :width="280" theme="light">
    <slot name="extra"></slot>
    <a-menu mode="inline" theme="light" :selectedKeys="matched" style="border-right: 0">
      <template v-for="item in menus">
        <a-menu-item v-if="!item.children && !item.hideChildrenInMenu" :key="item.name">
          <router-link :to="{ name: item.name }">
            <a-space>
              <i :class="`iconfont icon-${item.meta.icon}`" />
              <span>{{ item.meta.title }}</span>
            </a-space>
          </router-link>
        </a-menu-item>

        <a-menu-item v-if="item.children && item.hideChildrenInMenu" :key="item.name">
          <router-link :to="{ name: item.name }">
            <a-space>
              <i :class="`iconfont icon-${item.meta.icon}`" />
              <span>{{ item.meta.title }}</span>
            </a-space>
          </router-link>
        </a-menu-item>

        <sub-menu v-if="item.children && !item.hideChildrenInMenu" :key="item.name" :menu-info="item"></sub-menu>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import SubMenu from "@/components/SubMenu";

export default {
  components: { SubMenu },
  data() {
    return {
      matched: [],
    };
  },
  props: {
    menus: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    $route: {
      handler: function (newval) {
        this.matched = [];
        newval.matched.forEach((item) => {
          if (item.path) {
            this.matched.push(item.name);
          }
        });
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
