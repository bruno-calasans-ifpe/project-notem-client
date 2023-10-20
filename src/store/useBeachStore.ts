import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import ENVCONFIG from '../config/env'
import type { Beach } from '../types/Beach'

type AuthStore = {
  beach: Beach | null
  select: (beach: Beach) => void
  deselect: () => void
}

const useBeachStore = create<AuthStore>()(
  devtools(
    (set) => ({
      beach: null,
      select(newBeach) {
        set(() => ({ beach: newBeach }))
      },
      deselect() {
        set(() => ({ beach: null }))
      },
    }),
    {
      enabled: ENVCONFIG.DEV,
      anonymousActionType: 'authStore',
    },
  ),
)
export default useBeachStore
