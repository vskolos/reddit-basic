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

  usePostsData()

  return (
    <S.List>
      {posts.length > 0 ? (
        posts.map((post) => (
          <li key={post.data.id}>
            <Card post={post} />
          </li>
        ))
      ) : (
        <div style={{ textAlign: 'center' }}>
          {postsStatus === 'loading' ? 'Загрузка постов...' : 'Нет постов'}
        </div>
      )}
    </S.List>
  )
}
