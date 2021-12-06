import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      isLoading: true,
    };
  },
  mutations: {
    loading(state) {
      state.isLoading = true;
    },
    unLoading(state) {
      state.isLoading = false;
    },
  },
});

export default store;