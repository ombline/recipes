<template>

  <div class="card">
    <h1>{{recipe.name}}</h1>
    <h2>{{recipe.likes.length}} ❤️   -  {{recipe.duration}} ⏲️</h2>

    <div class="tags">
    <p v-for="tag in recipe.tags">{{tag}}</p>
    </div>

    <div class="content">
      <img :src="recipe.image" alt="recipe pic" v-if="recipe.image">
      <div class="ing">
      <ul>
        <li v-for="ingredient in recipe.ingredients" :ingredient="ingredient">{{ingredient}}</li>
      </ul>
      <!-- <a class="button is-info">Livraison des ingrédients</a> -->
    </div>
     </div>
    <ol>
      <li v-for="instruction in recipe.instructions" :instruction="instruction">{{instruction}}</li>
    </ol>
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

p {
  margin-bottom: 2%;
}

.card {
  padding: 2% 2% 4% 6%;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  width: 80%;
  margin: 0 auto;
}

.content {
  display: flex;
}

.ing  {
  margin-left: 10%;
  margin-top: -1.5%;
}

.ing a {
  margin-left: 5%;
}

img {
  width: 40%;
  height: 30%;
}

ol {
  margin-left: 2%;
  line-height: 150%;

}

.tags {
  margin-bottom: 0;
}

.tags p {
  margin-right: 1%;
}
</style>
