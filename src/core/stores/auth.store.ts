import type { AuthResponse } from '@/auth/models/auth-response'
import { reactive } from 'vue'

const authStore = reactive<{
  auth: string | null
  init: () => void
  setAuth: (authResponse: AuthResponse) => void
  clearAuth: () => void
}>({
  auth: null,
  init() {
    const auth = localStorage.getItem('auth')
    if (auth) {
      this.auth = JSON.parse(auth)
    }
  },
  setAuth(authResponse: AuthResponse) {
    localStorage.setItem('auth', JSON.stringify(authResponse.data.token))
    this.auth = authResponse.data.token
  },
  clearAuth() {
    localStorage.removeItem('auth')
    this.auth = null
  }
})

export default authStore