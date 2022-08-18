import React from 'react'
import * as S from './Title.styled'

export enum ETitleType {
  Page = 'h2',
  Post = 'h3',
}

interface ITitleProps {
  className?: string
  type: ETitleType
  text: string
}

export default function Title({ className = '', type, text }: ITitleProps) {
  return (
    <S.Title as={type} type={type} className={className}>
      {text}
    </S.Title>
  )
}
