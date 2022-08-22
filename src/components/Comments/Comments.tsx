import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllComments } from '../../app/commentsSlice'
import { RootState } from '../../app/store'
import usePostCommentsData from '../../hooks/usePostCommentsData'
import Comment from '../Comment/Comment'
import * as S from './Comments.styled'

export type Comment = {
  kind: string
  data: {
    id: string
    author: string
    body: string
    created: number
    replies:
      | ''
      | {
          data: { children: Comment[] }
        }
  }
}

type CommentsProps = {
  className?: string
  postId: string
}

export default function Comments({ className, postId }: CommentsProps) {
  const comments = useSelector(selectAllComments)
  const commentsStatus = useSelector(
    (state: RootState) => state.comments.status
  )

  usePostCommentsData(postId)

  function createCommentsNodes(commentsData: Comment[]) {
    return commentsData.map((comment) => {
      if (comment.kind === 'more') return null
      return (
        <Comment
          key={comment.data.id}
          name={comment.data.author}
          text={comment.data.body}
          created={comment.data.created}
          children={
            comment.data.replies !== '' &&
            createCommentsNodes(comment.data.replies.data.children)
          }
        />
      )
    })
  }

  return (
    <S.Comments className={className}>
      {commentsStatus === 'loading' ? (
        <div style={{ textAlign: 'center' }}>Загрузка комментариев...</div>
      ) : (
        createCommentsNodes(comments)
      )}
    </S.Comments>
  )
}
