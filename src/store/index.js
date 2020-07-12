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
    isFinish: false,
    hasInfo: false,
    currentStep: 0,
    selectedAnswers: [],
  },
  getters: {
    infoCount(state) {
      return state.info.length;
    },
  },
  mutations: {
    setData(state, data) {
      state.info = data;
    },
    setOptions(state, opt) {
      state.cant = opt.cant;
      state.difficulty = opt.diff;
      state.category = opt.cat;
      state.type = opt.type;
    },

    setStep(state, step) {
      state.currentStep = step;
    },
    addAnswer(state, answer) {
      state.selectedAnswers.push(answer);
    },
    finish(state) {
      state.isFinish = !state.isFinish;
    },
    setHasInfo(state) {
      state.hasInfo = !state.hasInfo;
    },
  },
  actions: {
    setData(context) {
      context.commit("setData");
    },
  },
  modules: {},
});
