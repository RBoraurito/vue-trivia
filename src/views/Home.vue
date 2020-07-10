<template>
  <div>
    <px-navbar></px-navbar>
    <div class="home">
      <div class="container-md">
        <h1 class="text-primary home__title">
          Do you want to answer a few questions?
        </h1>
        <p class="home__text">
          👋🏼 Hi! this is a trivia app, if you want to anwser a few questions you
          are in the right place, so lets have fun. Lets start, first you have
          to fill the information that is requested bellow 👇🏼(remember ask just
          20 questions per game) and then click
          <span class="text-primary">"Start Now"</span> , and finally have fun
          😁.
        </p>
      </div>
      <aside class="bg-primary">
        <div class="container-md home__options">
          <h3 class="text-white home__options__title">Choose as you want</h3>
          <div class="home__options__item">
            <h3>How Many?</h3>
            <input
              @input.capture="cantCheck()"
              v-model.number="cant"
              id="cant"
              type="number"
              name="cant"
              min="1"
              max="20"
            />
          </div>
          <div class="home__options__item">
            <h3>Category</h3>
            <select v-model="setCat" name="category" id>
              <option v-for="c in category" :key="c.id" :value="c.name">{{
                c.name
              }}</option>
            </select>
          </div>
          <div class="home__options__item">
            <h3>type</h3>
            <select v-model="setType" name="type" id>
              <option v-for="t in type" :key="t" :value="t">{{ t }}</option>
            </select>
          </div>
          <div class="home__options__item">
            <h3>difficulty</h3>
            <select v-model="setDiff" class="form-control" name="difficulty" id>
              <option v-for="d in difficulty" :key="d" :value="d">{{
                d
              }}</option>
            </select>
          </div>
        </div>
      </aside>
      <div class="button__container container-md w-100">
        <button @click="send()" class="button">Start Now</button>
      </div>
    </div>
  </div>
</template>

<script>
import PxNavbar from "@/components/PxNavbar";
import { category } from "@/info.json";
export default {
  name: "Home",
  components: {
    PxNavbar,
  },
  data() {
    return {
      cant: 1,
      setCat: "Any Category",
      setDiff: "Any Difficulty",
      setType: "Any Type",
      category: category,
      type: ["Any Type", "Multiple Choise", "True / False"],
      difficulty: ["Any Difficulty", "Easy", "Medium", "Hard"],
    };
  },
  methods: {
    cantCheck() {
      const ob = this.$el.querySelector("#cant");
      if (ob.value > 20) {
        this.cant = 0;
        this.$swal("Remember Just 20 questions 🧡");
      }
    },
    send() {
      this.$store.commit("setOptions", {
        cant: this.cant,
        type: this.setType,
        cat: this.setCat,
        diff: this.setDiff,
      });
    },
  },
};
</script>

<style></style>
