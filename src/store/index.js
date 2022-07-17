import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    basket: [],
  },
  getters: {},
  mutations: {
    setBasket(state, value) {
      // get parameter as array and set state
      state.basket = value;
    },
    addToBasket(state, value) {
      // get parameter as object and add it to basket.
      state.basket = [...state.basket, value];
    },
  },
  actions: {},
  modules: {},
});
