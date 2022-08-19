import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { set as setToken } from '../app/tokenSlice'

export default function useToken() {
  const token = useSelector((state: RootState) => state.token.value)
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.token) {
      dispatch(setToken(localStorage.token))
    } else if (window.__token__ && window.__token__ !== 'undefined') {
      dispatch(setToken(window.__token__))
      localStorage.token = window.__token__
    }
  }, [])

  return [token]
}
