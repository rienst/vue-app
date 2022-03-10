import { defineStore } from 'pinia'
import { readonly, ref } from 'vue'

export interface User {
  id: string
  name: string
  email?: string
}

const useUsersStore = defineStore('users', () => {
  const users = ref<User[]>([])

  const addUser = (user: User) => {
    users.value.push(user)
  }

  return readonly({ users, addUser })
})

export default useUsersStore
