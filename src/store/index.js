import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cant: 0,
    category: "",
    difficulty: "",
    type: "",
  },
  mutations: {
    setOptions(state, opt) {
      state.cant = opt.cant;
      state.difficulty = opt.diff;
      state.category = opt.cat;
      state.type = opt.type;
    },
  },
  actions: {},
  modules: {},
});
