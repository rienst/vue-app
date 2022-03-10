<script setup lang="ts">
import { ref } from 'vue'
import useUsersStore from '@/store/users'

const name = ref('')
const id = ref('')

const { addUser } = useUsersStore()

const handleSubmit = () => addUser({ name: name.value, id: id.value })
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="name" placeholder="name" />
    <input v-model="id" placeholder="id" />
    <button type="submit">Add</button>
  </form>
</template>
