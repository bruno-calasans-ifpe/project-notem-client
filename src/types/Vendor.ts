import type { UserRating } from './UserRating'

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
  name: string
  rating: number
  img: string
  info: VendorExtraInfo
  ratings: UserRating[]
}
