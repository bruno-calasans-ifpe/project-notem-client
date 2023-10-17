import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { User } from '../types/User.type'
import ENVCONFIG from '../config/env'

type AuthStore = {
  user: User | null
  login: (newUser: User) => void
  logout: () => void
}

const useAuthStore = create<AuthStore>()(
  devtools(
    (set) => ({
      user: null,
      login(newUser) {
        set(() => ({ user: newUser }))
      },
      logout() {
        set(() => ({ user: null }))
      },
    }),
    {
      enabled: ENVCONFIG.DEV,
      anonymousActionType: 'authStore',
    },
  ),
)
export default useAuthStore
