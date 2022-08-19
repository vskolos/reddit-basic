import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IPost } from '../components/Post/Post'
import { RootState } from '../app/store'
import { set as setPosts } from '../app/postsSlice'

export interface IPostsData {
  children?: IPost[]
}

export default function usePostsData() {
  const posts = useSelector((state: RootState) => state.posts.value)
  const token = useSelector((state: RootState) => state.token.value)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!token) return
    axios
      .get('https://oauth.reddit.com/r/memes.json?sr_detail=true', {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((resp) => {
        dispatch(setPosts(resp.data.data))
      })
      .catch(console.log)
  }, [token])

  return [posts]
}
