import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllComments } from '../../app/commentsSlice'
import { RootState } from '../../app/store'
import usePostCommentsData from '../../hooks/usePostCommentsData'
import Comment from '../Comment/Comment'
import * as S from './Comments.styled'

export interface IComment {
  kind: string
  data: {
    id: string
    author: string
    body: string
    created: number
    replies:
      | ''
      | {
          data: { children: IComment[] }
        }
  }
}

interface ICommentsProps {
  className?: string
  postId: string
}

export default function Comments({ className, postId }: ICommentsProps) {
  const comments = useSelector(selectAllComments)

  function createCommentsNodes(commentsData: IComment[]) {
    const comments = commentsData
    if (!comments) return null

    const children: React.ReactNode[] = []

    comments.forEach((comment) => {
      if (comment.kind === 'more') return null
      children.push(
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

    return children
  }

  return (
    <S.Comments className={className}>
      {createCommentsNodes(comments)}
    </S.Comments>
  )
}
