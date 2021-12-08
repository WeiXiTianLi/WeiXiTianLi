import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
    meta: {
      title: "首页 | WeiXiTianLi",
    },
  },
  {
    path: "/tianli_map/doc",
    name: "doc",
    component: () => import("../views/Doc.vue"),
    meta: {
      title: "文档 | TianLi_Map",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
