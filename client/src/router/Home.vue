<template>
  <div>
    <h1>👨🏻‍🍳 Bienvenue sur Cooky 👩🏼‍🍳</h1>
    <div v-for="recipe in recipes">
      <h2>{{recipe.name}}</h2>
      <img :src="recipe.imgPath" alt="recipe pic" v-if="recipe.imgPath">
    </div>
  </div>
</template>

<script>
import { getRecipes } from "../api/auth.js";
export default {
  data() {
    return {
      recipes: []
    };
  },
  created() {
    getRecipes().then(recipes => (this.recipes = recipes));
  }
};
</script>

<style scoped>
  h1 {
    text-align: center;
    font-size: 30px;
  }
</style>
