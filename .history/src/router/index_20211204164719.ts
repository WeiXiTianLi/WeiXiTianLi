import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/Home.vue") },
  { path: "/readme", component: () => import("@/views/Readme.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
