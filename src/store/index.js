import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loading: true,
  },
  mutations: {
    removeLoading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    removeLoading(state) {
      state.commit("removeLoading", false);
    },
  },
  modules: {},
  getters: {
    getLoading: (state) => state.loading,
  },
});

export default store;
