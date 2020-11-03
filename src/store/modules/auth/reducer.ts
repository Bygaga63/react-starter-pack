import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TUser } from 'store/modules/auth/types'

type TAuthState = {
  user: TUser | null
}

const initialState: TAuthState = { user: null }

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state: TAuthState, action: PayloadAction<TUser>) {
      state.user = action.payload
    },
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
