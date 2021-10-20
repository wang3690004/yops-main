import Vue from "vue";
import Vuex from "vuex";
import account from "./modules/account";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { account, getters },
});
