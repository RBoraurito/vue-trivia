<template>
  <section class="container-md">
    <div class="trivia">
      <div class="trivia__hearts">
        <i v-for="(h,i) in hearts" :key="i">{{ h }}</i>
      </div>
      <div class="trivia__question">
        <h3 class="trivia__question__title">Questions</h3>
        <p
          class="trivia__question__text"
        >In the Animal Crossing series, which flower is erroneously called the &quot;Jacob&#039;s Ladder&quot;?</p>
      </div>
      <div class="trivia__answer">
        <h3 class="trivia__answer__title">Pick an Answer</h3>
      </div>
      <div class="trivia__steps">
        <h3 class="trivia__steps__text"></h3>
      </div>
    </div>
  </section>
</template>

<script>
import getData from "@/api";
export default {
  name: "Trivia",
  data() {
    return {
      hearts: ["🤍", "🤍", "🤍"],
      info: {}
    };
  },
  created() {
    let options = {
      cant: this.$store.state.cant,
      category: this.$store.state.category,
      difficulty: this.$store.state.difficulty,
      type: this.$store.state.type
    };
    getData(options).then(response => {
      this.info = response;
    });
  }
};
</script>

<style>
</style>