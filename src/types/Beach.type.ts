import type { DangerTypes } from '../view/Auth/Home/SearchBar/Filter/Filter.type'

export type BeachRating = {
  user: string
  stars: number
  commentary: string
  date: string
}

export type BeachProduct = {
  name: 'string'
  image: string
}

export type BeachService = {
  name: 'string'
  image: string
}

export type Beach = {
  name: string
  location: string
  distance: number
  danger: DangerTypes
  images: string[]
  ratings: BeachRating[]
  userRating?: BeachRating
  products?: BeachProduct[]
  services?: BeachService[]
}
