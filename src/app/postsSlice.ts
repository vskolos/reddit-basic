import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IPostsData } from '../hooks/usePostsData'

type PostsState = {
  value?: IPostsData
}

const initialState: PostsState = {}

export const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    set: (state, action: PayloadAction<IPostsData>) => {
      state.value = action.payload
    },
  },
})

export const { set } = postsSlice.actions
export default postsSlice.reducer
