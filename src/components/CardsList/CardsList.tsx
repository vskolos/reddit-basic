import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from '../../app/postsSlice'
import { RootState } from '../../app/store'
import usePostsData from '../../hooks/usePostsData'
import Card from '../Card/Card'
import * as S from './CardsList.styled'

export default function CardsList() {
  const posts = useSelector(selectAllPosts)
  const postsStatus = useSelector((state: RootState) => state.posts.status)
  const children: React.ReactNode[] = []

  usePostsData()

  if (posts) {
    posts.forEach((post) => {
      children.push(
        <li key={post.data.id}>
          <Card post={post} />
        </li>
      )
    })
  }

  return (
    <S.List>
      {children.length > 0 ? (
        children
      ) : (
        <div style={{ textAlign: 'center' }}>
          {postsStatus === 'loading' ? 'Загрузка постов...' : 'Нет постов'}
        </div>
      )}
    </S.List>
  )
}
