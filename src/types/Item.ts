import type { UserRating } from './UserRating'

export type ItemType = 'product' | 'service'

export type Item = {
  name: string
  price: number
  img: string
  type: ItemType
  category: string
  tags: string[]
  desc: string
  ratings: UserRating[]
}
