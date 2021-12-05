import { createApp } from 'vue'
import { stringifyQuery } from 'vue-router'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title :any= to.meta.title
  }
  next()
})