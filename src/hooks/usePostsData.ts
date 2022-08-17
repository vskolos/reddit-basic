import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { tokenContext } from '../context/tokenContext'

export interface IPost {
  data: {
    id: string
    author: string
    created: number
    num_comments: number
    thumbnail: string
    title: string
    score: number
    sr_detail: {
      icon_img: string
    }
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
      .get('https://oauth.reddit.com/best.json?sr_detail=true', {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((resp) => {
        console.log(resp.data.data)
        setData(resp.data.data)
      })
      .catch(console.log)
  }, [token])

  return [data]
}
