import apiClient from '@/core/helpers/api-client'
import type { LoginPayload } from './models/login-payload'
import type { AuthResponse } from './models/auth-response'
import authStore from '@/core/stores/auth.store'
import router from '@/router'

export const login = (payLoad: LoginPayload): Promise<AuthResponse> => {
  return apiClient
    .url('/auth/login')
    .post(payLoad)
    .json()
    .then((response) => {
      authStore.setAuth(response as AuthResponse)
      return response as AuthResponse
    })
}

export const logout = (): void => {
  authStore.clearAuth()
  router.replace('/login')
}
