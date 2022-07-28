import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { tokenContext } from '../shared/context/tokenContext'

export interface IPost {
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

interface IPostsData {
  children?: Array<IPost>
}

export function usePostsData() {
  const [data, setData] = useState<IPostsData>({})
  const token = useContext(tokenContext)

  useEffect(() => {
    axios
      .get('https://oauth.reddit.com/best.json', {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((resp) => {
        setData(resp.data.data)
      })
      .catch(console.log)
  }, [token])

  return [data]
}
