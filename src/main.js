import Vue from "vue";
import router from "./router";
import store from "./store";
import "./core/lazy-ant-design-vue";
import Storage from "vue-ls";
import vuelsoptions from "./core/config";
import "./core/permission";
import getLang from "./i18n/index";

import "@/assets/style/app.less";
import "./mock";

import App from "./App.vue";
import startQiankun from "./micro";

Vue.config.productionTip = false;
Vue.prototype.$t = getLang;
Vue.use(Storage, vuelsoptions);
startQiankun();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
