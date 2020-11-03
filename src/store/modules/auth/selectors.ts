import { TState } from 'store/store'

export const getUser = (state: TState) => state.auth.user
