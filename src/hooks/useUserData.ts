import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { fetchUser } from '../app/userSlice'

export interface IUserData {
  name?: string
  iconImg?: string
}

export default function useUserData() {
  const token = useSelector((state: RootState) => state.token.value)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!token) return
    dispatch(fetchUser(token))
  }, [token])
}
