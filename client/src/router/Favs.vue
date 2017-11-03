<template>
  <div>
    <h1> Mes favoris </h1>
    <div class="container">
    <div v-for="(like,index) in likes" class="card">
      <h2>{{like.name}}</h2>
      <router-link :to="'/recipes/' + like._id">

      <img :src="like.image" alt="recipe image" v-if="like.image">

    </router-link>

    </div>
  </div>
</div>
</template>

<script>
import { getOneRecipe, getRecipes, like, seeFavs } from "../api/auth.js";
export default {
  data() {
    return {
      likes: []
    };
  },
  created() {
    seeFavs().then(likes => (this.likes = likes));
  }
};
</script>

<style scoped>
  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 30px;
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
