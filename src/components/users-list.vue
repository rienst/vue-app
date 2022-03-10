<script setup lang="ts">
import useUsersStore from '@/store/users'

const { users } = useUsersStore()
</script>

<template>
  <ul v-if="users.length">
    <li v-for="user in users" :key="user.id">
      {{ user.name }} ({{ user.id }})
    </li>
  </ul>
</template>
