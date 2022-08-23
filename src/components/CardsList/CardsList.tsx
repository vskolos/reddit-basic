import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, selectAllPosts } from '../../app/postsSlice'
import { RootState } from '../../app/store'
import usePostsData from '../../hooks/usePostsData'
import Card from '../Card/Card'
import * as S from './CardsList.styled'

export default function CardsList() {
  const posts = useSelector(selectAllPosts)
  const postsStatus = useSelector((state: RootState) => state.posts.status)

  const token = useSelector((state: RootState) => state.token.value)
  const after = useSelector((state: RootState) => state.posts.after)
  const dispatch = useDispatch()

  const postsListBottom = useRef<HTMLLIElement>(null)
  const [loadsCount, setLoadsCount] = usePostsData(postsListBottom)

  return (
    <S.List>
      {posts.length > 0 ? (
        posts.map((post) => (
          <S.Item key={post.data.id}>
            <Card post={post} />
          </S.Item>
        ))
      ) : (
        <div style={{ textAlign: 'center' }}>
          {postsStatus === 'loading' ? 'Загрузка постов...' : 'Нет постов'}
        </div>
      )}
      <S.Item ref={postsListBottom}>
        {loadsCount === 2 && postsStatus === 'success' && (
          <S.MoreButton
            text="Загрузить ещё"
            onClick={() => {
              dispatch(fetchPosts({ token: token, after: after }))
              setLoadsCount(0)
            }}
          />
        )}
      </S.Item>
    </S.List>
  )
}
