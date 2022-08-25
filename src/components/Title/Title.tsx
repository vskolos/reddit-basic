import React from 'react'
import * as S from './Title.styled'

export enum ETitleType {
  Page = 'h2',
  Post = 'h3',
}

type TitleProps = {
  className?: string
  type: ETitleType
  text: string
  href?: string
}

export default function Title({
  className = '',
  type,
  text,
  href = '',
}: TitleProps) {
  return (
    <S.Title as={type} type={type} className={className}>
      {href ? <S.TitleLink to={href}>{text}</S.TitleLink> : text}
    </S.Title>
  )
}
