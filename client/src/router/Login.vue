<template>
  <div>
    <form @submit.prevent="login">
      <div class="field">
        <p class="control has-icons-left">
          <input v-model="username" class="input" type="username" placeholder="Nom">
          <span class="icon is-small is-left">
            <i class="fa fa-smile-o "></i>
          </span>
        </p>
      </div>

      <div class="field">
        <p class="control has-icons-left">
          <input v-model="password" class="input" type="password" placeholder="Mot de passe">
              <span class="icon is-small is-left">
                <i class="fa fa-lock"></i>
              </span>
            </p>
          </div>

      <button class="button is-info">Login</button>
    </form>

    <router-link to="/signup">
      Pas de compte? Créez-en un ici
    </router-link>
  </div>
</template>

<script>
import { login } from "@/api/auth";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      login(this.username, this.password, this.$root).then(data => {
        this.$router.push("/");
      });
    }
  }
};
</script>

<style scoped>
  button {
    margin-top: 1%;
    font-size: 20px;
    margin-bottom: 3%;
  }
  form {
    width: 40%;
  }

  input {
    margin-bottom: 2%;
    font-size: 20px;
  }
</style>
