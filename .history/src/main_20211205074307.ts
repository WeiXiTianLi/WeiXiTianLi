import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
router.beforeEach((to, from, next) => {
  if (to.title)
})