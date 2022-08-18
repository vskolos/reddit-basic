import React from 'react'
import usePostCommentsData, {
  IPostCommentsData,
} from '../../hooks/usePostCommentsData'
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
          data: IPostCommentsData
        }
  }
}

interface ICommentsProps {
  className?: string
  postId: string
}

export default function Comments({ className, postId }: ICommentsProps) {
  const [comments] = usePostCommentsData(postId)

  function createCommentsNodes(commentsData: IPostCommentsData) {
    const comments = commentsData.children
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
            createCommentsNodes(comment.data.replies.data)
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
