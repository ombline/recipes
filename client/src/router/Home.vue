<template>
  <div>
    <h1>👨🏻‍🍳 Bienvenue sur <span>Cooky</span> 👩🏼‍🍳</h1>
    <div class="container">
      <div v-for="(recipe,index) in recipes" class="card">
        <h2>{{recipe.name}}</h2>
        <router-link :to="'/recipes/' + recipe._id">
        <img :src="recipe.image" alt="recipe pic" v-if="recipe.image">
      </router-link>
      <!-- <p>Ajouté par {{recipe.$root.user.name}}</p> -->
      <div class="likes">
        <button @click="likeRecipe(recipe._id, $root.user._id, index)"
        v-bind:class="{ liked: recipe.isLiked }">
          {{recipe.likes.length}} ❤️</button>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getRecipes, like } from "../api/auth.js";
export default {
  data() {
    return {
      recipes: []
    };
  },
  methods: {
    likeRecipe(rID, uID, i) {
      if (this.recipes[i].likes.indexOf(uID) === -1) {
        like(rID, uID).then(response => {
          this.recipes[i].likes.push(uID);
          this.recipes[i].isLiked = true;
        });
      } else {
        like(rID, uID).then(response => {
          this.recipes[i].likes.pop(uID);
          this.recipes[i].isLiked = false;
        });
      }
    }
  },
  created() {
    getRecipes().then(recipes => {
      this.recipes = recipes;
      recipes.forEach(recipe => {
        let uID = this.$root.user._id;
        if (recipe.likes.indexOf(uID) === -1) {
          recipe.isLiked = false;
        } else {
          recipe.isLiked = true;
        }
      });
    });
  }
};
</script>

<style scoped>

  h1 {
    text-align: center;
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

  button {
    margin-top: 3%;
    font-size: 25px;
    background-color: white;
    cursor: pointer;
    border: none;
  }
  .liked {
    color: red;
  }


</style>
