import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { set as setUser } from '../app/userSlice'

export interface IUserData {
  name?: string
  iconImg?: string
}

export default function useUserData() {
  const token = useSelector((state: RootState) => state.token.value)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!token) return
    axios
      .get('https://oauth.reddit.com/api/v1/me', {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((resp) => {
        const userData = resp.data
        dispatch(setUser({ name: userData.name, iconImg: userData.icon_img }))
      })
      .catch(console.log)
  }, [token])
}
