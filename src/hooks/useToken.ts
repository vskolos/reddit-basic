import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { set as setToken } from '../app/tokenSlice'
import { getCookie, setCookie } from '../utils/cookies'

export default function useToken() {
  const dispatch = useDispatch()

  useEffect(() => {
    const cookieToken = getCookie('token')
    if (cookieToken && cookieToken !== 'undefined') {
      dispatch(setToken(cookieToken))
      return
    }

    const windowToken = window.__token__
    if (windowToken && windowToken !== 'undefined') {
      dispatch(setToken(windowToken))
      setCookie('token', windowToken)
    }
  }, [])
}
