import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", name: "home", component: () => import("../views/Home.vue") },
  { path: "/readme", name: "readme", title: '使用说明', component: () => import("../views/Readme.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
