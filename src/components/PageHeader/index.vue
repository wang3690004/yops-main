<template>
  <div class="page-header">
    <div class="page-header-heading">
      <div class="page-header-heading-back" @click="back" v-if="showIcon"><a-icon type="arrow-left" /></div>
      <span class="page-header-heading-title">{{ title }}</span>
    </div>
    <slot name="extra"></slot>
  </div>
</template>
<script>
/**
 * pageheader 页头
 * @param {String} title 主标题
 * @param {Boolean} showIcon 是否显示箭头图标
 * @param {Function} back 点击箭头的方法
 * 使用带有extra的插槽默认在整行的右侧 和主标题对称展示

 */
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    back() {
      this.$emit("back");
    },
  },
};
</script>

<style lang="less">
.page-header {
  // border-bottom: 1px solid #e8e8e8;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .page-header-heading {
    display: flex;
    justify-content: space-between;
  }
  .page-header-heading-back {
    cursor: pointer;
    margin-right: 16px;
    font-size: 16px;
    &:hover {
      color: #1890ff;
    }
  }
  .page-header-heading-title {
    font-size: 16px;
    font-weight: bold;
  }
}
</style>