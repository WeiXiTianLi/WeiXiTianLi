import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/Home") },
  { path: "/readme", component: () => import("@/views/Readme") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
