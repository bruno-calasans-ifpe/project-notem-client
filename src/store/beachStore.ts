import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import ENVCONFIG from '../config/env'
import type { Beach } from '../types/Beach'

type BeachStore = {
  beach: Beach | null
  select: (beach: Beach) => void
  deselect: () => void
}

const beachStore = create<BeachStore>()(
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
      anonymousActionType: 'beachStore',
    },
  ),
)
export default beachStore
