import React, { useState } from 'react'
import createdAtLabel from '../../utils/createdAtLabel'
import { EIcon } from '../Icon/Icon'
import UserLink, { EUserLinkType } from '../UserLink/UserLink'
import * as S from './Comment.styled'

type CommentProps = {
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
}: CommentProps) {
  const [isReplyFormOpen, setIsReplyFormOpen] = useState(false)

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
        {isReplyFormOpen && <S.ReplyForm value={`${name}, `} focus={true} />}
      </S.Comment>
      {children}
    </S.CommentBlock>
  )
}
