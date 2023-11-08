export type AccountType = 'cliente' | 'vendedor'

export type User = {
  name: string
  email: string
  accountType: AccountType
}
