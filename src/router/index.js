import Vue from "vue";
import VueRouter from "vue-router";
import { constantRouterMap } from "./routemap";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: constantRouterMap,
});
//缺乏相关接口 现阶段不做权限控制默认将所有路由全部加载出来 即asyncRouterMap
export default router;
