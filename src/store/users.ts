import { defineStore } from 'pinia'
import { ref } from 'vue'

interface User {
  id: string
  name: string
  email?: string
}

const useUsersStore = defineStore('users', () => {
  const users = ref<User[]>([])

  const addUser = (user: User) => {
    users.value.push(user)
  }

  return { users, addUser }
})

export default useUsersStore
