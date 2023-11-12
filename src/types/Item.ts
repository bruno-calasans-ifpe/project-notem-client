export type ItemType = 'product' | 'service'

export type Item = {
  name: string
  price: number
  img: string
  type: ItemType
}
