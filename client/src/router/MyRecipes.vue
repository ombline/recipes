<template>
  <div>

    <h1> Mes recettes ajoutées </h1>

    <!-- <p v-if="!recipe"> Je n'ai pas encore ajouté de recette.</p> -->

    <div class="container">
    <div v-for="(recipe,index) in recipes" class="card">
      <h2>{{recipe.name}} </h2>
      <p>{{recipe.likes.length}} ❤️</p>
      <router-link :to="'/recipes/' + recipe._id">

      <img :src="recipe.image" alt="recipe image" v-if="recipe.image">
      </router-link>

      <router-link :to="'/' + recipe._id + '/edit'">
      <button class="button is-warning">Editer</button>
    </router-link>
    <router-link :to="'/'+recipe._id + '/delete'">
      <button class="button is-danger">Supprimer</button>
    </router-link>

    </div>
  </div>
  </div>
</template>

<script>
import { getMyRecipes } from "../api/auth.js";
export default {
  data() {
    return {
      recipes: null,
      recipe: null
    };
  },
  created() {
    getMyRecipes(this.$root.user._id).then(recipes => (this.recipes = recipes));
  }
};
</script>

</script>

<style scoped>
  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 30px;
  }

  p {
    margin-bottom: 3%;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .card {
    text-align: center;
    margin: 5%;
    padding: 2%;
    width: 40%;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  }

  img {
    width: 90%;
    height: 70%;
  }
</style>
