import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IComment } from '../components/Comments/Comments'
import { RootState } from '../app/store'

export interface IPostCommentsData {
  children?: IComment[]
}

export default function usePostCommentsData(postId: string) {
  const [data, setData] = useState<IPostCommentsData>({})
  const token = useSelector((state: RootState) => state.token.value)

  useEffect(() => {
    let mounted = true
    axios
      .get(`https://oauth.reddit.com/comments/${postId}.json`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((resp) => {
        if (mounted) setData(resp.data[1].data)
      })
      .catch(console.log)

    return () => {
      mounted = false
    }
  }, [token])

  return [data]
}
