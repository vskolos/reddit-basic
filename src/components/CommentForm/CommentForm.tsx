import React, { useCallback, useState } from 'react'
import { useStoreon } from 'storeon/react'
import * as S from './CommentForm.styled'

type CommentFormProps = {
  className?: string
  username?: string
  value?: string
  focus?: boolean
  storeon?: boolean
}

export default function CommentForm({
  className,
  username,
  value = '',
  focus = false,
  storeon = false,
}: CommentFormProps) {
  const [commentValue, setCommentValue] = useState(value)
  const textAreaRef = useCallback((textArea) => {
    if (!textArea || !focus) return
    textArea.setSelectionRange(textArea.value.length, textArea.value.length)
    textArea.focus()
  }, [])
  const { dispatch, comment } = useStoreon('comment')

  return (
    <S.Form className={className} onSubmit={(e) => e.preventDefault()}>
      <S.TextArea
        ref={textAreaRef}
        name="comment"
        placeholder={`${username ?? 'Аноним'}, оставьте ваш комментарий`}
        value={storeon ? comment : commentValue}
        onChange={
          storeon
            ? (e) => dispatch('comment/set', e.target.value)
            : (e) => setCommentValue(e.target.value)
        }
      />
      <S.SubmitButton text="Комментировать" />
    </S.Form>
  )
}
