import type { AuthResponse } from '@/views/auth/models/auth-response'
import { reactive } from 'vue'

const authStore = reactive<{
  auth: AuthResponse | null
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
    localStorage.setItem('auth', JSON.stringify(authResponse))
    this.auth = authResponse
  },
  clearAuth() {
    localStorage.removeItem('auth')
    this.auth = null
  }
})

export default authStore