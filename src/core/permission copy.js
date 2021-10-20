import Vue from "vue";
import router from "../router/index";
import store from "../store/index";
import { ACCESS_TOKEN } from "@/store/mutation-types";

const allowList = ["login"];
const loginRoutePath = "/login";
const defaultRoutePath = "/workspace";

router.beforeEach((to, from, next) => {
  if (Vue.ls.get(ACCESS_TOKEN)) {
    if (to.path === loginRoutePath) {
      next({ path: defaultRoutePath }); //有token 不允许跳转登录 需要在个人中心登出再进行登录
    } else {
      if (store.state.account.permission.length === 0) {

        store
          .dispatch("GetInfo")
          .then(res => {
            const role = res.data.type; //vuex中没有角色的路由，这时候要重新请求 重新把该角色权限对应的动态路由进行添加

            store.dispatch("GenerateRoutes", { role }).then(() => {
              // router.addRoutes(store.state.account.addRouters);
              if (store.state.account.addRouters) {
                store.state.account.addRouters.map(item => {
                  router.addRoute(item);
                })
              }

              const redirect = decodeURIComponent(from.query.redirect || to.path);
              if (to.path === redirect) {
                next({ ...to, replace: true });
              } else {
                next({ path: redirect });
              }
            });
          })
          .catch(() => {
            store.dispatch("Logout").then(() => {
              next({ path: loginRoutePath });
            });
          });
      } else {
        next();
      }
    }
  } else {
    if (allowList.includes(to.name)) {
      next();
    } else {
      next({
        path: loginRoutePath,
        query: {
          redirect: to.fullPath
        }
      });
    }
  }
});
