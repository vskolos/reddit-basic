import React, { useState } from 'react'
import * as S from './CommentForm.styled'

interface ICommentFormProps {
  className?: string
  username?: string
}

export default function CommentForm({
  className,
  username,
}: ICommentFormProps) {
  const [commentValue, setCommentValue] = useState('')
  return (
    <S.Form className={className} onSubmit={(e) => e.preventDefault()}>
      <S.TextArea
        placeholder={`${
          username ? username : 'Аноним'
        }, оставьте ваш комментарий`}
        value={commentValue}
        onChange={(e) => setCommentValue(e.target.value)}
      />
      <S.SubmitButton text="Комментировать" />
    </S.Form>
  )
}
