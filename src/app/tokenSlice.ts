import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type TokenState = {
  value?: string
}

const initialState: TokenState = {
  value: '',
}

export const tokenSlice = createSlice({
  name: 'token',
  initialState: initialState,
  reducers: {
    set: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { set } = tokenSlice.actions
export default tokenSlice.reducer
