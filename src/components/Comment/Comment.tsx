import React, { useEffect, useRef, useState } from 'react'
import createdAtLabel from '../../utils/createdAtLabel'
import { EIcon } from '../Icon/Icon'
import UserLink, { EUserLinkType } from '../UserLink/UserLink'
import * as S from './Comment.styled'

interface ICommentProps {
  className?: string
  children?: React.ReactNode
  name: string
  text: string
  created: number
}

export default function Comment({
  className,
  children,
  created,
  name,
  text,
}: ICommentProps) {
  const [isReplyFormOpen, setIsReplyFormOpen] = useState(false)
  const replyFormRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (!replyFormRef.current) return
    const textarea = replyFormRef.current.comment

    if (isReplyFormOpen) {
      textarea.setSelectionRange(textarea.value.length, textarea.value.length)
      textarea.focus()
    }
  }, [isReplyFormOpen])
  return (
    <S.CommentBlock className={className}>
      <S.Comment>
        <UserLink type={EUserLinkType.Post} name={name} />
        <S.CreatedAt>{createdAtLabel(created)}</S.CreatedAt>
        <S.Text>{text}</S.Text>
        <S.Actions>
          <S.ActionButton
            icon={EIcon.Comments}
            text="Ответить"
            onClick={() => setIsReplyFormOpen(!isReplyFormOpen)}
          />
          <S.ActionButton icon={EIcon.Share} text="Поделиться" />
          <S.ActionButton icon={EIcon.Alert} text="Пожаловаться" />
        </S.Actions>
        {isReplyFormOpen && (
          <S.ReplyForm value={`${name}, `} formRef={replyFormRef} />
        )}
      </S.Comment>
      {children}
    </S.CommentBlock>
  )
}
