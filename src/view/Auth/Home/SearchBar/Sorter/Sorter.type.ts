export const orderBy = ['nome', 'avaliação', 'periculosidade'] as const
export type OrderBy = (typeof orderBy)[number]

export const orderDirections = ['crescente', 'decrescente'] as const
export type OrderDirection = (typeof orderDirections)[number]

export type SortOptions = {
  orderBy?: OrderBy
  direction?: OrderDirection
}

export type SortState = {
  opened: boolean
  applied: boolean
  options: SortOptions
}
