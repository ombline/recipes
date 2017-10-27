<template>
  <div class="card">
    <h1>{{recipe.name}}</h1>
    <h2>{{recipe.duration}} {{recipe.tags}} {{recipe.likes}}</h2>
    <div class="content">
      <img :src="recipe.imgPath" alt="recipe pic" v-if="recipe.imgPath">
      <div class="ing">
      <ul>
        <li v-for="ingredient in recipe.ingredients" :ingredient="ingredient">{{ingredient}}</li>
      </ul>
      <a class="button is-info">Livraison des ingrédients</a>
    </div>
     </div>
    <ul>
      <li v-for="instruction in recipe.instructions" :instruction="instruction">{{instruction}}</li>
    </ul>
  </div>
</template>

<script>
import { getOneRecipe } from "../api/auth.js";
export default {
  name: "RecipeCard",
  data() {
    return {
      recipe: Object
    };
  },
  methods: {
    getRecipe() {
      getOneRecipe(this.$route.params.id).then(recipe => {
        this.recipe = recipe;
      });
    }
  },
  created() {
    this.getRecipe();
  }
};
</script>

<style scoped>
h1 {
  font-size: 40px;
}

h2 {
  margin-bottom: 2%;
}
.card {
  padding: 1% 0 2% 5%;
  margin-top: -3%;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}

.content {
  display: flex;
}

.ing  {
  margin-left: 7%;
}

.ing a {
  margin-left: 5%;
}
</style>
