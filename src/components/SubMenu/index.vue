<template functional>
  <a-sub-menu :key="props.menuInfo.name">
    <span slot="title">
      <router-link :to="{ name: props.menuInfo.name }">
        <a-space>
          <i :class="`iconfont icon-${props.menuInfo.meta.icon}`" />
          <span>{{ props.menuInfo.meta.title }}</span>
        </a-space>
      </router-link>
    </span>

    <template v-for="item in props.menuInfo.children">
      <a-menu-item v-if="!item.children" :key="item.name">
        <router-link :to="{ name: item.name }">
          <a-space>
            <i :class="`iconfont icon-${item.meta.icon}`" />
            <span>{{ item.meta.title }}</span>
          </a-space>
        </router-link>
      </a-menu-item>

      <a-menu-item v-if="item.children && item.hideChildrenInMenu" :key="item.name">
        <router-link :to="{ name: item.name }">
          <a-spcae>
            <i :class="`iconfont icon-${item.meta.icon}`" />
            <span>{{ item.meta.title }}</span>
          </a-spcae>
        </router-link>
      </a-menu-item>
      <sub-menu v-if="item.children && !item.hideChildrenInMenu" :key="item.name" :menu-info="item" />
    </template>
  </a-sub-menu>
</template>

<script>
export default {
  props: {
    menuInfo: { type: Object, default: () => {} },
  },
  data() {
    return {};
  },
};
</script>