export type AccountType = 'cliente' | 'vendendo'

export type User = {
  name: string
  email: string
  accountType: AccountType
}
