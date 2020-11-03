import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TUser = {
  login: string
}

type TUserState = {
  user: TUser | null
}

const initialState: TUserState = { user: null }

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state: TUserState, action: PayloadAction<TUser>) {
      state.user = action.payload
    },
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
