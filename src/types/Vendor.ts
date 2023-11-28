import type { UserRating } from './UserRating'
import type { Item } from './Item'

export type Contacts = {
  whatsapp?: string
  instagram?: string
  twitter?: string
  email?: string
}

export type PaymentMethod = {
  category: string
  name: string
}

export type VendorExtraInfo = {
  about: string
  contacts: Contacts
  paymentMethods: PaymentMethod[]
}

export type Vendor = {
  id: string
  beachId: string
  name: string
  rating: number
  img: string
  info: VendorExtraInfo
  ratings: UserRating[]
  items: Item[]
}
