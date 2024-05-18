<template>
  <div>
    <h2>Signup</h2>
       <!-- Your signup form -->
       <form @submit.prevent="signup">
      <label for="username">Username:</label>
      <input type="text" v-model="username" id="username" required>
      
      <label for="password">Password:</label>
      <input type="password" v-model="password" id="password" required>
      
      <label for="admin">Admin:</label>
      <input type="checkbox" v-model="admin" id="admin">
      
      <button @click="login" type="submit">Signup</button>
    </form>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SignupForm',
  data() {
    return {
      username: '',
      password: '',
      admin: false,
      message: ''
    };
  },
  methods: {
    async signup() {
      try {
        const response = await axios.post('http://127.0.0.1:1234/signup', {
          username: this.username,
          password: this.password,
          admin: this.admin
        });
        this.message = response.data.message;
        this.$router.push('/login');
      } catch (error) {
        this.message = error.response.data.message;
      }
    }
  }
};
</script>
