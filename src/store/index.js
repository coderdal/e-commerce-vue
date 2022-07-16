import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    basket: [],
    isLoading: true,
  },
  getters: {},
  mutations: {
    getWholeProducts() {},
  },
  actions: {},
  modules: {},
});
