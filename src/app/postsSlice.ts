import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IPostsData } from '../hooks/usePostsData'
import axios from 'axios'

type PostsState = {
  data: IPostsData
  status: 'idle' | 'loading' | 'success' | 'error'
}

const initialState: PostsState = {
  data: {},
  status: 'idle',
}

export const fetchPosts = createAsyncThunk(
  'posts/fetch',
  async (token: string) => {
    const response = await axios.get(
      'https://oauth.reddit.com/r/memes.json?sr_detail=true',
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    )
    return response.data.data
  }
)

export const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(
        fetchPosts.fulfilled,
        (state, action: PayloadAction<IPostsData>) => {
          state.status = 'success'
          state.data = action.payload
        }
      )
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'error'
        throw action.error
      })
  },
})

export default postsSlice.reducer
