import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IUserData } from '../hooks/useUserData'

type UserState = {
  value?: IUserData
}

const initialState: UserState = {}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    set: (state, action: PayloadAction<IUserData>) => {
      state.value = action.payload
    },
  },
})

export const { set } = userSlice.actions
export default userSlice.reducer
