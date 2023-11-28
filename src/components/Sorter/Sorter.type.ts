export const orderDirections = ['crescente', 'decrescente'] as const
export type OrderDirection = (typeof orderDirections)[number]

export type SortOptions = {
  orderBy?: string
  direction?: OrderDirection
}

export type SortState = {
  opened: boolean
  applied: boolean
  options: SortOptions
}
