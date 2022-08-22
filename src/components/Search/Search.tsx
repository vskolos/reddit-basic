import React from 'react'
import Icon, { EIcon } from '../Icon/Icon'
import * as S from './Search.styled'

type SearchProps = {
  className?: string
}

export default function Search({ className }: SearchProps) {
  return (
    <S.Search className={className}>
      <S.Icon>
        <Icon type={EIcon.Search} />
      </S.Icon>
      <S.Input type="text" placeholder="Поиск" />
    </S.Search>
  )
}
