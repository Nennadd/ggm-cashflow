import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: true,
  },
  mutations: {
    showLoading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    showLoading(state) {
      state.commit("showLoading", false);
    },
  },
  modules: {},
  getters: {
    getLoading: (state) => state.loading,
  },
});
