<template>
  <div>
    <p>Êtes-vous sûr de vouloir supprimer cette recette?</p>
    <button @click="deleteOne" class="button">Oui</button>
    <router-link :to="'/myrecipes'">
    <button class="button">Non</button>
  </router-link>

  </div>
</template>

<script>
import { deleteRecipe } from "../api/auth.js";
export default {
  methods: {
    deleteOne() {
      console.log(this.$route.params.id);
      deleteRecipe(this.$route.params.id).then(this.$router.push("/myrecipes"));
    }
  }
};
</script>
