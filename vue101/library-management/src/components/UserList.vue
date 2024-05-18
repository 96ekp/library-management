<template>
  <div>
    <h2>Users</h2>
    <button @click="fetchUsers">Load Users</button>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.username }} - Admin: {{ user.has_admin_role }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name:'UserList',
  data() {
    return {
      users: []
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost/user/list', {
          headers: { 'x-access-token': token }
        });
        this.users = response.data.Users;
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
