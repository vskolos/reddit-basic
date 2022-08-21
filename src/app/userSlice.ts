import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IUserData } from '../hooks/useUserData'
import axios from 'axios'

type UserState = {
  data: IUserData
  status: 'idle' | 'loading' | 'success' | 'error'
}

const initialState: UserState = {
  data: {},
  status: 'idle',
}

export const fetchUser = createAsyncThunk(
  'user/fetch',
  async (token: string) => {
    const response = await axios.get('https://oauth.reddit.com/api/v1/me', {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
    const userData = response.data
    return { name: userData.name, iconImg: userData.icon_img }
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(
        fetchUser.fulfilled,
        (state, action: PayloadAction<IUserData>) => {
          state.status = 'success'
          state.data = action.payload
        }
      )
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'error'
        throw action.error
      })
  },
})

export default userSlice.reducer
