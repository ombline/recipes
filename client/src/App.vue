<template>
  <div id="app">
   <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <p><span>&#x1F373;</span></p>
        </a>

        <a class="navbar-item" href="/">
          <h1>Cooky</h1>
        </a>

      </div>

      <div id="navMenuTransparentExample" class="navbar-menu">
        <div class="navbar-end">
          <router-link v-if="!$root.user" to="/login" class="navbar-item ">
            👤 Login
          </router-link>
          <router-link v-if="!$root.user" to="/signup" class="navbar-item ">
            📜 Signup
          </router-link>

          <router-link class="navbar-item"  v-if="$root.user" to="/new">
            Ajouter une recette 🖊️
          </router-link>
          <router-link class="navbar-item"  v-if="$root.user" to="/favs">
            Mes favoris ❤️
          </router-link>
          <a class="navbar-item" @click.prevent="logout" v-if="$root.user" href="#">
            Logout ❎
          </a>
        </div>
      </div>
    </nav>

    <section class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
import { logout, addRecipe, seeFavs } from "@/api/auth";
export default {
  name: "app",
  methods: {
    logout() {
      logout(this.$root);
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>


  nav {
    background-color: #f9c639;
  }

  span {
    font-size: 50px;
  }
  .navbar-brand {
    margin-left: 2%;
  }
  .navbar-menu{
    margin-right: 2%;
  }
  h1{
    font-size: 25px;
  }
</style>
