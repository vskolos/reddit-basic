import React from 'react'
import noop from '../../utils/noop'
import Icon, { EIcon } from '../Icon/Icon'
import * as S from './Button.styled'

type ButtonProps = {
  className?: string
  icon?: EIcon
  text?: string
  reversed?: boolean
  onClick?: () => void
  disabled?: boolean
}

export default function Button({
  className,
  icon,
  text,
  reversed = false,
  onClick = noop,
  disabled = false,
}: ButtonProps) {
  return (
    <S.Button className={className} onClick={onClick} disabled={disabled}>
      {icon !== undefined && !reversed && (
        <S.Icon>
          <Icon type={icon} />
        </S.Icon>
      )}
      {text && <S.Text>{text}</S.Text>}
      {icon !== undefined && reversed && (
        <S.Icon>
          <Icon type={icon} />
        </S.Icon>
      )}
    </S.Button>
  )
}
