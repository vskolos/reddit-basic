import React from 'react'
import Icon, { EIcon } from '../Icon/Icon'
import Select from '../Select/Select'
import { TitleType } from '../Title/Title'
import { EUserLinkType } from '../UserLink/UserLink'
import * as S from './Header.styled'

export default function Header() {
  return (
    <S.Header>
      <S.Info>
        <S.HeaderUserLink type={EUserLinkType.Header} />
        <S.HeaderSearch />
        <S.MessagesButton
          icon={<Icon type={EIcon.Envelope} />}
          text="4"
          reversed={true}
        />
      </S.Info>
      <S.HeaderTitle type={TitleType.Page} text="Лента новостей" />
      <Select />
    </S.Header>
  )
}
