import React from 'react'
import { usePostsData } from '../../hooks/usePostsData'

export interface IPostsContext {
  data: {
    id: string
    author: string
    created: number
    num_comments: number
    thumbnail: string
    title: string
    score: number
  }
}

export interface IPostsContextData {
  children?: Array<IPostsContext>
}

export const postsContext = React.createContext<IPostsContextData>({})

interface IPostsContextProviderProps {
  children: React.ReactNode
}

export function PostsContextProvider({ children }: IPostsContextProviderProps) {
  const [data] = usePostsData()
  return <postsContext.Provider value={data}>{children}</postsContext.Provider>
}
