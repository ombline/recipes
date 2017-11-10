<template>
  <div class="form">

    <h1>Nouvelle recette ➕</h1>

    <div v-if="!image">

     <div class="file">
       <label class="file-label">
       <input class="file-input" type="file" name="resume" @change="onFileChange">
       <span class="file-cta">
       <span class="file-icon">
        <i class="fa fa-upload"></i>
      </span>
      <span class="file-label">
        Choisir une photo
      </span>
    </span>
  </label>
</div>
   </div>
   <div v-else>
     <img :src="image" />
       <button @click="removeImage" style="width: 30%;" class="button is-warning">Supprimer l'image</button>
   </div>

    <form>

    <label>
      <input v-model="name" type="text" name="name" placeholder="Nom de la recette">
    </label>

    <label v-for="(ingredient, index) in ingredients">
      <input
      v-model="ingredients[index]" type="text" name="ingredients" placeholder="Ingredient" class="inline-input">
      <button class="destroy" @click.prevent="removeIngredient(index)">X</button>
    </label>

    <button class="button is-info" type="button" @click.prevent="addIngredientInput"> Ajouter un ingrédient
    </button>

    <label v-for="(instruction, index) in instructions">
      <input
      v-model="instructions[index]" type="text" name="instructions" placeholder="Instructions" class="inline-input">
      <button class="destroy" @click.prevent="removeInstruction(index)">X</button>
    </label>

    <button class="button is-info" type="button" @click.prevent="addInstructionInput">☝🏼  Ajouter une instruction
    </button>

    <label>
      <input v-model="duration" type="text" name="duration" placeholder="⌚ Durée">
    </label>

    <label v-for="(tag, index) in tags">
      <input
      v-model="tags[index]" type="text" name="tags" placeholder=" Tag" class="inline-input">
      <button class="destroy" @click.prevent="removeTag(index)">X</button>
    </label>

    <button class="button is-info" type="button" @click.prevent="addTagInput"> #️⃣  Ajouter un tag
    </button>

  </form>

    <button @click="postNewRecipe" class="button is-success">Ajouter</button>

  <form action="/" method="get">
    <button class="button is-danger">Annuler</button>
  </form>

  <div v-if="err">
    Please fill out all fields
  </div>

  </div>

  </div>
</template>

<script>
import { addRecipe } from "../api/auth.js";
export default {
  name: "CreateNew",
  data() {
    return {
      name: null,
      image: null,
      ingredients: [null],
      instructions: [null],
      duration: null,
      tags: [null],
      err: null
    };
  },
  methods: {
    addIngredientInput() {
      this.ingredients.push(null);
    },
    addInstructionInput() {
      this.instructions.push(null);
    },
    addTagInput() {
      this.tags.push(null);
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function(e) {
      this.image = "";
    },
    postNewRecipe() {
      var info = {
        name: this.name,
        image: this.image,
        ingredients: this.ingredients,
        instructions: this.instructions,
        duration: this.duration,
        tags: this.tags,
        user: this.$root.user
      };
      console.log(info);

      addRecipe(info)
        .then(() => {
          this.$router.push("/");
        })
        .catch(err => {
          this.err = true;
        });
    },
    removeIngredient: function(index) {
      this.ingredients.splice(this.ingredients[index], 1);
    },
    removeInstruction: function(index) {
      this.instructions.splice(this.instructions[index], 1);
    },
    removeTag: function(index) {
      this.tags.splice(this.tags[index], 1);
    }
  },
  created() {}
};
</script>

<style scoped>

h1 {
  font-size: 28px;
  margin-bottom: 2%;
}

form {
  display:flex;
  flex-direction: column;
}

label {
  margin-top: 1%;
  font-size: 20px;
}

input {
  display: flex;
  width: 50%;
  font-size: 18px;
  padding: 0.5%;
  margin-bottom: 1%;
  margin-top: 1%;
}

button {
  width: 30%;
  margin-bottom: 2%;
  font-size: 18px;
}

img {
  width: 30%;
  display: block;
  margin-bottom: 10px;
}

.is-success {
  margin-top: 2%;
  font-size: 25px;
}

.destroy {
  background-color: white;
  border: none;
  box-shadow: none;
  width: 3%;

}

label {
}

.destroy:hover {
  cursor: pointer;
}

.inline-input {
  display: inline-block;

}

</style>
