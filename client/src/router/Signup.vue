<template>
  <div>
    <form @submit.prevent="signup">
      <b-field label="Username">
        <b-input v-model="username" placeholder="Username" required></b-input>
      </b-field>

      <b-field label="Email">
        <b-input v-model="email" type="email" placeholder="Email" required>
        </b-input>
      </b-field>

      <b-field label="Password">
        <b-input v-model="password" placeholder="Password" type="password" required password-reveal>
        </b-input>
      </b-field>

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
  }
  form {
    width: 40%;
  }

</style>
