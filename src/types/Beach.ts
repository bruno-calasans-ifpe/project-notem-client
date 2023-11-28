import type { DangerTypes } from '../components/Filter/Filter.type'
import type { UserRating } from './UserRating'

export type Beach = {
  id: string
  name: string
  location: string
  distance: number
  danger: DangerTypes
  images: string[]
  ratings: UserRating[]
  userRating?: UserRating
}
