import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from './tokenSlice'
import userReducer from './userSlice'
import postsReducer from './postsSlice'
import commentsReducer from './commentsSlice'
import thunk from 'redux-thunk'

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    user: userReducer,
    posts: postsReducer,
    comments: commentsReducer,
  },
  middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
