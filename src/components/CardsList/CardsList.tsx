import React, { useContext } from 'react'
import { postsContext } from '../../context/postsContext'
import Card from '../Card/Card'
import * as S from './CardsList.styled'

export default function CardsList() {
  const posts = useContext(postsContext)
  const children: React.ReactNode[] = []

  if (posts.children) {
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
