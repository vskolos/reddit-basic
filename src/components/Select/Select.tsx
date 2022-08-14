import React from 'react'
import Icon, { EIcon } from '../Icon/Icon'
import * as S from './Select.styled'

export default function Select() {
  return (
    <S.Select>
      <S.Icon>
        <Icon type={EIcon.Pencil} />
      </S.Icon>
      <S.Text>Мои посты</S.Text>
      <S.Arrow>
        <Icon type={EIcon.DownArrow} />
      </S.Arrow>
    </S.Select>
  )
}
