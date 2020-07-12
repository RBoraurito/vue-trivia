<template>
  <div>
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
      <aside class="home__container">
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
              <option v-for="c in localCategory" :key="c.id" :value="c.name">
                {{ c.name }}
              </option>
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
              <option v-for="d in difficulty" :key="d" :value="d">
                {{ d }}
              </option>
            </select>
          </div>
        </div>
      </aside>
      <div class="button__container container-md w-100">
        <router-link :to="{ name: 'Trivia' }">
          <button @click="send(setCat)" class="button">Start Now</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { category } from "@/info.json";
export default {
  name: "Home",
  data() {
    return {
      cant: 1,
      setCat: "Any Category",
      setDiff: "Any Difficulty",
      setType: "Any Type",
      localCategory: category,
      type: ["Any Type", "Multiple Choise", "True / False"],
      difficulty: ["Any Difficulty", "Easy", "Medium", "Hard"]
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
    send(attr) {
      //Buscando la categoria en el arreglo de categorias con cat(v-model)
      const searchCat = category.find(c => c.name == attr);
      console.log(searchCat);
      this.$store.commit("setHasInfo");
      this.$store.commit("setOptions", {
        cant: this.cant,
        type: this.setType,
        //Enviando el Id al store para la consulta del api
        cat: searchCat.id,
        diff: this.setDiff
      });
    }
  }
};
</script>

<style></style>
