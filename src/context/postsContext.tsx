import React from 'react'
import usePostsData, { IPostsData } from '../hooks/usePostsData'

export const postsContext = React.createContext<IPostsData>({})

interface IPostsContextProviderProps {
  children: React.ReactNode
}

export default function PostsContextProvider({
  children,
}: IPostsContextProviderProps) {
  const [data] = usePostsData()
  return <postsContext.Provider value={data}>{children}</postsContext.Provider>
}
