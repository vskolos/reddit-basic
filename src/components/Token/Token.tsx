import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useToken from '../../hooks/useToken'

export default function Token() {
  const navigate = useNavigate()

  useToken()
  useEffect(() => navigate('/posts', { replace: true }), [])

  return <></>
}
