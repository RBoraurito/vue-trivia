import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cant: 0,
    category: "",
    difficulty: "",
    type: "",
    info: false,
    currentStep: 0,
    selectedAnswers: [],
  },
  getters: {
    infoCount(state) {
      return state.info.length;
    },
  },
  mutations: {
    setOptions(state, opt) {
      state.cant = opt.cant;
      state.difficulty = opt.diff;
      state.category = opt.cat;
      state.type = opt.type;
    },
    setData(state, data) {
      state.info = data;
    },
    setStep(state, step) {
      state.step = step;
    },
  },
  actions: {},
  modules: {},
});
