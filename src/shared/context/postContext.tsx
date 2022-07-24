import React from 'react'
import { usePostsData } from '../../hooks/usePostsData'

export interface IPostContext {
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
  children?: Array<IPostContext>
}

export const postContext = React.createContext<IPostsContextData>({})

interface IPostContextProviderProps {
  children: React.ReactNode
}

export function PostContextProvider({ children }: IPostContextProviderProps) {
  const [data] = usePostsData()
  return <postContext.Provider value={data}>{children}</postContext.Provider>
}
