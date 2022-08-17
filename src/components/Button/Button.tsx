import React from 'react'
import noop from '../../utils/noop'
import * as S from './Button.styled'

interface IButtonProps {
  className?: string
  icon?: React.ReactNode
  text?: string
  reversed?: boolean
  onClick?: () => void
}

export default function Button({
  className,
  icon,
  text,
  reversed = false,
  onClick = noop,
}: IButtonProps) {
  return (
    <S.Button className={className} onClick={onClick}>
      {icon && !reversed && <S.Icon>{icon}</S.Icon>}
      {text && <S.Text>{text}</S.Text>}
      {icon && reversed && <S.Icon>{icon}</S.Icon>}
    </S.Button>
  )
}
