import React, { useEffect, useState } from 'react'
import { UserBlock } from './UserBlock'
import styles from './searchblock.css'
import axios from 'axios'

interface ISearchBlockProps {
  token: string
}

interface IUserData {
  name?: string
  iconImg?: string
}

export function SearchBlock({ token }: ISearchBlockProps) {
  const [data, setData] = useState<IUserData>({})
  useEffect(() => {
    axios
      .get('https://oauth.reddit.com/api/v1/me', {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((resp) => {
        const userData = resp.data
        setData({ name: userData.name, iconImg: userData.icon_img })
      })
      .catch(console.log)
  }, [token])
  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} />
    </div>
  )
}
