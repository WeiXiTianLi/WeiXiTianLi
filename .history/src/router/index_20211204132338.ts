import { createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import('@/views/Home.vue')
  }
]