import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { set as setToken } from '../app/tokenSlice'

export default function useToken() {
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.token) {
      dispatch(setToken(localStorage.token))
    } else if (window.__token__ && window.__token__ !== 'undefined') {
      dispatch(setToken(window.__token__))
      localStorage.token = window.__token__
    }
  }, [])
}
