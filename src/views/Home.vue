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
            <select name="category" id>
              <option v-for="c in category" :key="c.id" :value="c.name">{{
                c.name
              }}</option>
            </select>
          </div>
          <div class="home__options__item">
            <h3>type</h3>
            <select name="type" id>
              <option v-for="t in type" :key="t" :value="t">{{ t }}</option>
            </select>
          </div>
          <div class="home__options__item">
            <h3>difficulty</h3>
            <select class="form-control" name="difficulty" id>
              <option v-for="d in difficulty" :key="d" :value="d">{{
                d
              }}</option>
            </select>
          </div>
        </div>
      </aside>
      <div class="button__container container-md w-100">
        <button class="button">Start Now</button>
      </div>
    </div>
  </div>
</template>

<script>
import PxNavbar from "@/components/PxNavbar";
export default {
  name: "Home",
  components: {
    PxNavbar,
  },
  data() {
    return {
      cant: Number,
      category: [
        { id: 0, name: "Any Category" },
        { id: 9, name: "General Knowledge" },
        { id: 10, name: "Entertainment: Books" },
        { id: 11, name: "Entertainment: Film" },
        { id: 12, name: "Entertainment: Music" },
        { id: 13, name: "Entertainment: Musicals & Theatres" },
        { id: 14, name: "Entertainment: Television" },
        { id: 15, name: "Entertainment: Video Games" },
        { id: 16, name: "Entertainment: Board Games" },
        { id: 17, name: "Science & Nature" },
        { id: 18, name: "Science: Computers" },
        { id: 19, name: "Science: Mathematics" },
        { id: 20, name: "Mythology" },
        { id: 21, name: "Sports" },
        { id: 22, name: "Geography" },
        { id: 23, name: "History" },
        { id: 24, name: "Politics" },
        { id: 25, name: "Art" },
        { id: 26, name: "Celebrities" },
        { id: 27, name: "Animals" },
        { id: 28, name: "Vehicles" },
        { id: 29, name: "Entertainment: Comics" },
        { id: 30, name: "Science: Gadgets" },
        { id: 31, name: "Entertainment: Japanese Anime & Manga" },
        { id: 32, name: "Entertainment: Cartoon & Animations" },
      ],
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
  },
};
</script>

<style></style>
