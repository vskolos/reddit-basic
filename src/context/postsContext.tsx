import React from 'react'
import { IPost, usePostsData } from '../hooks/usePostsData'

export interface IPostsContextData {
  children?: Array<IPost>
}

export const postsContext = React.createContext<IPostsContextData>({})

interface IPostsContextProviderProps {
  children: React.ReactNode
}

export function PostsContextProvider({ children }: IPostsContextProviderProps) {
  const [data] = usePostsData()
  return <postsContext.Provider value={data}>{children}</postsContext.Provider>
}
