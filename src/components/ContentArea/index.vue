<template>
  <div class="content-area">
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less">
.content-area {
  width: 100%;
  height: 100%;
  padding: 10px 20px;
}
</style>