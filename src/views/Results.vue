<template>
  <section class="container-md results">
    <h2 class="results__title">Here are the results</h2>
    <div class="results__container">
      <h3>
        Correct answers:
        <span>{{ correct }}</span>
      </h3>
      <h3>
        Incorrect answers:
        <span>{{ incorrect }}</span>
      </h3>
      <h3>
        Score:
        <span>{{ score.toFixed(2) }} pts</span>
      </h3>
    </div>
    <router-link :to="{ name: 'Home' }">
      <button class="btn btn-primary results__button">Finish</button>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "Results",
  data() {
    return {
      correct: 0,
      incorrect: 0
    };
  },
  computed: {
    score() {
      let correct = this.correct;
      let incorrect = this.incorrect;
      let steps = correct + incorrect;
      let pointsPerQ = 100 / steps;
      return correct * pointsPerQ;
    }
  },
  created() {
    if (!this.$store.state.isFinish) {
      this.$router.push({ name: "Home" });
      return false;
    }
    const info = this.$store.state.info;
    const selectedAnswers = this.$store.state.selectedAnswers;
    for (let i = 0; i < info.length; i++) {
      if (info[i].correct_answer == selectedAnswers[i]) {
        this.correct += 1;
      }
      if (info[i].correct_answer !== selectedAnswers[i]) {
        this.incorrect += 1;
      }
    }
    this.$store.commit("finish");
    this.$store.commit("defaultState");
  }
};
</script>

<style></style>
