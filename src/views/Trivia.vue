<template>
  <section class="container-md">
    <div class="trivia">
      <div class="trivia__question">
        <h3 class="trivia__question__title">Questions</h3>
        <p class="trivia__question__text" v-html="currentQuestion"></p>
      </div>
      <div class="trivia__answer">
        <h3 class="trivia__answer__title">Pick an Answer</h3>
        <div
          class="trivia__answer__container"
          v-for="(t, i) in totalAnswers"
          :key="i"
          @click="nextStep(t)"
        >
          <h3 class="trivia__answer__container__text" v-html="t"></h3>
        </div>
      </div>
      <div class="trivia__steps">
        <h3 class="trivia__steps__text">
          {{ currentStep + 1 }} / {{ totalSteps }}
        </h3>
      </div>
    </div>
  </section>
</template>

<script>
import getData from "@/api";
import { shuffle } from "@/random";
export default {
  name: "Trivia",
  data() {
    return {
      info: Object,
      currentStep: Number,
      totalSteps: Number,
      currentQuestion: String,
      totalAnswers: []
    };
  },
  methods: {
    nextStep(answer) {
      this.$store.commit("addAnswer", answer);
      this.$store.commit("setStep", (this.currentStep += 1));
      this.currentStep = this.$store.state.currentStep;
      if (this.currentStep === this.totalSteps) {
        this.$store.commit("finish");
        this.$router.push({ name: "Results" });
        return false;
      }
      this.info = this.$store.state.info[this.currentStep];
      this.totalSteps = this.$store.getters.infoCount;
      this.currentQuestion = this.info.question;
      this.totalAnswers = [];
      this.totalAnswers.push(...this.info.incorrect_answers);
      this.totalAnswers.push(this.info.correct_answer);
      shuffle(this.totalAnswers);
    }
  },
  created() {
    if (this.$store.state.hasInfo === false) {
      this.$router.push({ name: "Home" });
    }
    let options = {
      cant: this.$store.state.cant,
      category: this.$store.state.category,
      difficulty: this.$store.state.difficulty,
      type: this.$store.state.type
    };
    getData(options).then(response => {
      this.$store.commit("setData", response);
      this.currentStep = this.$store.state.currentStep;
      this.info = this.$store.state.info[this.currentStep];
      this.totalSteps = this.$store.getters.infoCount;
      this.currentQuestion = this.info.question;
      this.totalAnswers.push(...this.info.incorrect_answers);
      this.totalAnswers.push(this.info.correct_answer);
      shuffle(this.totalAnswers);
    });
  }
};
</script>

<style></style>
