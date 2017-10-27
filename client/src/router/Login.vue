<template>
  <div>
    <form @submit.prevent="login">
      <b-field label="Username">
        <b-input v-model="username" placeholder="Username" required></b-input>
      </b-field>

      <b-field label="Password" type="is-warning">
        <b-input v-model="password" placeholder="Password" type="password" required password-reveal>
        </b-input>
      </b-field>

      <button class="button is-info">Login</button>
    </form>
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
  }
  form {
    width: 40%;
  }
</style>
