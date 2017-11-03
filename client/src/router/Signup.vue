

<template>
  <div>
    <form @submit.prevent="signup">
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
          <input v-model="email" class="input" type="email" placeholder="Email">
          <span class="icon is-small is-left">
            <i class="fa fa-envelope"></i>
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

      <button class="button is-info">Signup</button>
    </form>
  </div>
</template>

<script>
import { signup } from "@/api/auth";
export default {
  data() {
    return {
      username: "",
      password: "",
      email: "",
      error: null
    };
  },
  methods: {
    signup() {
      this.error = null;
      signup({
        username: this.username,
        email: this.email,
        password: this.password
      })
        .then(() => {
          this.$router.push("/login");
        })
        .catch(err => {
          this.error = err;
          console.error("Signup err", err);
        });
    }
  }
};
</script>

<style scoped>
  button {
    margin-top: 1%;
    font-size: 20px;

  }
  form {
    width: 40%;
  }

  input {
    margin-bottom: 2%;
    font-size: 20px;
  }

</style>
