import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IPost } from '../components/Post/Post'
import { RootState } from '../app/store'
import { fetchPosts } from '../app/postsSlice'

export interface IPostsData {
  children?: IPost[]
}

export default function usePostsData() {
  const token = useSelector((state: RootState) => state.token.value)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!token) return
    dispatch(fetchPosts(token))
  }, [token])
}
