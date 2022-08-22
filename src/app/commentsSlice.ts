import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { Comment } from '../components/Comments/Comments'
import { RootState } from './store'

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.data.id,
})

const initialState = commentsAdapter.getInitialState<{
  status: 'idle' | 'loading' | 'success' | 'error'
}>({
  status: 'idle',
})

export const fetchComments = createAsyncThunk(
  'comments/fetch',
  async ({ token, postId }: { token: string; postId: string }, thunkApi) => {
    const response = await axios.get(
      `https://oauth.reddit.com/comments/${postId}.json`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    )
    return response.data[1].data.children
  }
)

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: initialState,
  reducers: {
    clear: (state) => {
      state.status = 'idle'
      commentsAdapter.removeAll(state)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(
        fetchComments.fulfilled,
        (state, action: PayloadAction<Comment[]>) => {
          state.status = 'success'
          commentsAdapter.setAll(state, action.payload)
        }
      )
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = 'error'
        throw action.error
      })
  },
})

export default commentsSlice.reducer

export const { clear } = commentsSlice.actions

export const { selectAll: selectAllComments } = commentsAdapter.getSelectors(
  (state: RootState) => state.comments
)
