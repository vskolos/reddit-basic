import React, { useCallback, useState } from 'react'
import * as S from './CommentForm.styled'

type CommentFormProps = {
  className?: string
  username?: string
  value?: string
  focus?: boolean
}

export default function CommentForm({
  className,
  username,
  value = '',
  focus = false,
}: CommentFormProps) {
  const [commentValue, setCommentValue] = useState(value)
  const textAreaRef = useCallback((textArea) => {
    if (!textArea || !focus) return
    textArea.setSelectionRange(textArea.value.length, textArea.value.length)
    textArea.focus()
  }, [])
  return (
    <S.Form className={className} onSubmit={(e) => e.preventDefault()}>
      <S.TextArea
        ref={textAreaRef}
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
