/* eslint-disable consistent-return */
import vendors from '../data/vendors'

export default function vendorApi() {
  return {
    getAll() {
      return vendors
    },
    getById(vendorId: string) {
      return vendors.find(({ id }) => id === vendorId)
    },
    getByName(vendorName: string) {
      return vendors.find(({ name }) => name === vendorName)
    },
    getItemFromVendor(vendorId: string, itemId: string) {
      const foundVendor = this.getById(vendorId)
      if (!foundVendor) return
      return foundVendor.items.find(({ id }) => id === itemId)
    },
  }
}
