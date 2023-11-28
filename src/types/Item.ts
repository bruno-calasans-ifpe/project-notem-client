import type { UserRating } from './UserRating'

export type ItemType = 'product' | 'service'

export type Item = {
  id: string
  name: string
  slug?: string
  price: number
  img: string
  type: ItemType
  category: string
  tags: string[]
  desc: string
  ratings: UserRating[]
}
