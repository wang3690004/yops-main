<template>
  <div class="app-avatar-container inline-block" @click="handleClick">
    <a-avatar v-if="src" style="background-color: #fff;" :size="size" :src="src" />
    <a-avatar v-else-if="name" :style="{backgroundColor: color}" :size="size">{{showName}}</a-avatar>
    <a-avatar v-else :style="{backgroundColor: color}" :size="size" :icon="icon" />
  </div>
</template>
<script>
/**
 * 头像组件
 * @param {String} src 图片路径 优先级最高
 * @param {String} name 名称 优先级第二
 * @param {String} color 背景色
 * @param {String} icon 图标 优先级第三 无内容时，使用 user 图标
 * @param {Number, String} size 头像大小 同 a-avatar
 * @param {String} shape 头像形状 'circle', 'square' 同 a-avatar
 * @param {Function} handleClick 点击事件
 *
 */

export default {
  name: "Avatar",
  props: {
    src: String,
    name: String,
    color: {
      type: String,
      default: "#1890FF"
    },
    icon: {
      type: String,
      default: "user"
    },
    size: [Number, String],
    shape: String,
  },
  data() {
    return {
      visible: false
    }
  },
  computed: {
    showName() {
      let showName = "";
      if (this.name) {
        if (/^[\u4e00-\u9fa5]+$/i.test(this.name)){
          showName = this.name.substr(this.name.length -2)
        } else {
          showName = this.name.substr(0, 2)
        }
      }
      return showName
    }
  },
  methods: {
    handleClick() {
      this.$emit('handleClick')
    }
  }
};
</script>
<style lang="less">
  .app-avatar-container {
    .ant-avatar-string {
      font-size: 15px;
    }
    .ant-avatar-icon {
      .anticon {
        font-size: 27px;
      }
    }
  }
</style>
