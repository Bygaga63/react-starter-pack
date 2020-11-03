export type TUser = {
  login: string
}

type TAuthState = {
  user: TUser | null
}
