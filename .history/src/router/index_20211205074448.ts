import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
    meta: {
      title: "首页 | 天理地图",
    },
  },
  {
    path: "/readme",
    name: "readme",
    component: () => import("../views/Readme.vue"),
    meta: {
      title: "使用说明 | 天理地图",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
