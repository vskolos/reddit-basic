import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { setCookie } from '../../utils/cookies'
import { set as setToken } from '../../app/tokenSlice'

export default function Token() {
  const [searchParams, _] = useSearchParams()
  const code = searchParams.get('code')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .post(
        'https://www.reddit.com/api/v1/access_token',
        `grant_type=authorization_code&code=${code}&redirect_uri=${process.env.URI}/auth`,
        {
          auth: {
            username: process.env.CLIENT_ID!,
            password: process.env.SECRET!,
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
      .then(({ data }) => {
        setCookie('token', data.access_token)
        dispatch(setToken(data.access_token))
        navigate('/posts', { replace: true })
      })
  }, [])

  return <></>
}
