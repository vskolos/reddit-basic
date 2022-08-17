import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { IPost } from '../components/Post/Post'
import { tokenContext } from '../context/tokenContext'

export interface IPostsData {
  children?: IPost[]
}

export default function usePostsData() {
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
