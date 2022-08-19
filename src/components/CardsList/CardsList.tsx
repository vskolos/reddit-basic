import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import Card from '../Card/Card'
import * as S from './CardsList.styled'

export default function CardsList() {
  const posts = useSelector((state: RootState) => state.posts.value)
  const children: React.ReactNode[] = []

  if (posts && posts.children) {
    posts.children.forEach((post) => {
      children.push(
        <li key={post.data.id}>
          <Card post={post} />
        </li>
      )
    })
  }

  return <S.List>{children}</S.List>
}
