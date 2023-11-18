import type { DangerTypes } from '../view/Auth/Home/SearchBar/Filter/Filter.type'
import type { UserRating } from './UserRating'

export type Beach = {
  name: string
  location: string
  distance: number
  danger: DangerTypes
  images: string[]
  ratings: UserRating[]
  userRating?: UserRating
}
