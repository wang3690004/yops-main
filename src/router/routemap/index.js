import Layout from "@/views/layout/index";
import Login from "@/views/login/index";
import ContentMinify from "@/views/layout/components/ContentMinify";

export const constantRouterMap = [
  {
    path: "/login",
    name: "login",
    hidden: true,
    component: Login,
  },
  {
    path: "/404",
    name: "notFound",
    hidden: true,
    component: () => import("@/views/NotFound"),
  },
];

export const asyncRouterMap = [
  {
    path: "/",
    name: "ContentMinify",
    component: ContentMinify,
    // redirect: "/k8s",
    meta: { title: "首页", icon: "", permission: ["ADMIN", "STAFF"] },
  },
  {
    path: "/layout",
    name: "basicLayout",
    component: Layout,
    // redirect: "/k8s",
    meta: { title: "首页", icon: "", permission: ["ADMIN", "STAFF"] },
  },
  // {
  //   path: "*",
  //   redirect: "/404",
  //   hidden: true,
  // },
  //先行注释 待第一个版本发出后解除掉注释
];
