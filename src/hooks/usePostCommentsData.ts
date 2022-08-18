import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { IComment } from '../components/Comments/Comments'
import { tokenContext } from '../context/tokenContext'

export interface IPostCommentsData {
  children?: IComment[]
}

export default function usePostCommentsData(postId: string) {
  const [data, setData] = useState<IPostCommentsData>({})
  const token = useContext(tokenContext)

  useEffect(() => {
    axios
      .get(`https://oauth.reddit.com/comments/${postId}.json`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((resp) => {
        setData(resp.data[1].data)
      })
      .catch(console.log)
  }, [token])

  return [data]
}
