export const dangerTypes = ['qualquer', 'nenhum', 'pouco', 'médio', 'muito'] as const
export type DangerTypes = (typeof dangerTypes)[number]

export type FilterOptions = {
  products?: string[]
  services?: string[]
  danger?: DangerTypes
  distance?: number
}

export type FilterState = {
  opened: boolean
  applied: boolean
  options: FilterOptions
}
