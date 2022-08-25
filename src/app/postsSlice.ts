import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { PostData } from '../components/Post/Post'
import { RootState } from './store'

const postsAdapter = createEntityAdapter<PostData>({
  selectId: (post) => post.data.id,
})

const initialState = postsAdapter.getInitialState<{
  status: 'idle' | 'loading' | 'success' | 'error'
  after: string
}>({
  status: 'idle',
  after: '',
})

export const fetchPosts = createAsyncThunk(
  'posts/fetch',
  async ({ token, after }: { token: string; after: string }) => {
    const response = await axios.get(
      'https://oauth.reddit.com/best.json?sr_detail=true',
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
        params: {
          after: after,
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
        (
          state,
          action: PayloadAction<{ after: string; children: PostData[] }>
        ) => {
          state.status = 'success'
          state.after = action.payload.after
          postsAdapter.setMany(state, action.payload.children)
        }
      )
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'error'
        throw action.error
      })
  },
})

export default postsSlice.reducer

export const { selectAll: selectAllPosts, selectById: selectPostById } =
  postsAdapter.getSelectors((state: RootState) => state.posts)
