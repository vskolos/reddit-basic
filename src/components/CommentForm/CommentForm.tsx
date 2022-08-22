import React, { useState } from 'react'
import * as S from './CommentForm.styled'

type CommentFormProps = {
  className?: string
  username?: string
  formRef?: React.RefObject<HTMLFormElement>
  value?: string
}

export default function CommentForm({
  className,
  username,
  value = '',
  formRef,
}: CommentFormProps) {
  const [commentValue, setCommentValue] = useState(value)
  return (
    <S.Form
      className={className}
      onSubmit={(e) => e.preventDefault()}
      ref={formRef}
    >
      <S.TextArea
        name="comment"
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
