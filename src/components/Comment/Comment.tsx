import React from 'react'
import createdAtLabel from '../../utils/createdAtLabel'
import Icon, { EIcon } from '../Icon/Icon'
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
  return (
    <S.CommentBlock className={className}>
      <S.Comment>
        <UserLink type={EUserLinkType.Post} name={name} />
        <S.CreatedAt>{createdAtLabel(created)}</S.CreatedAt>
        <S.Text>{text}</S.Text>
        <S.Actions>
          <S.ActionButton
            icon={<Icon type={EIcon.Comments} />}
            text="Ответить"
          />
          <S.ActionButton
            icon={<Icon type={EIcon.Share} />}
            text="Поделиться"
          />
          <S.ActionButton
            icon={<Icon type={EIcon.Alert} />}
            text="Пожаловаться"
          />
        </S.Actions>
      </S.Comment>
      {children}
    </S.CommentBlock>
  )
}
