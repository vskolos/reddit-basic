import React from 'react'
import Card from '../Card/Card'
import * as S from './CardsList.styled'

export default function CardsList() {
  return (
    <S.List>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
    </S.List>
  )
}
