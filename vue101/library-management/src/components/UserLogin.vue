<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name:'UserLogin',
  data() {
    return {
      username: '',
      password: '',
      message: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://127.0.0.1:1234/login', {
          username: this.username,
          password: this.password
        });
        const userData = response.data.User;
        localStorage.setItem('token', userData.token);
        this.$router.push('/');
      } catch (error) {
        this.message = error.response.data;
      }
    }
  }
};
</script>
