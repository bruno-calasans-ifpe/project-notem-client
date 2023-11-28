import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import ENVCONFIG from '../config/env'
import type { Vendor } from '../types/Vendor'

type VendorStore = {
  vendor: Vendor | null
  select: (vendor: Vendor) => void
  deselect: () => void
}

const vendorStore = create<VendorStore>()(
  devtools(
    (set) => ({
      vendor: null,
      select(vendor) {
        set(() => ({ vendor }))
      },
      deselect() {
        set(() => ({ vendor: null }))
      },
    }),
    {
      enabled: ENVCONFIG.DEV,
      anonymousActionType: 'vendorStore',
    },
  ),
)
export default vendorStore
