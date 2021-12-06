import { createApp } from "vue";
import { stringifyQuery } from "vue-router";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(router).use(store).mount("#app");

router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
  store.commit('unLoading')
});
