import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    title: "首页 | 天理地图",
    component: () => import("../views/Home.vue"),
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
