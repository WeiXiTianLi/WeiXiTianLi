import { createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import('../src/')
  }
]