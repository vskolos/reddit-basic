import React, { useContext } from 'react'
import { userContext } from '../../context/userContext'
import Icon, { EIcon } from '../Icon/Icon'
import Select from '../Select/Select'
import { TitleType } from '../Title/Title'
import { EUserLinkType } from '../UserLink/UserLink'
import * as S from './Header.styled'

export default function Header() {
  const { name, iconImg } = useContext(userContext)
  return (
    <S.Header>
      <S.Info>
        <S.HeaderUserLink
          type={EUserLinkType.Header}
          href="https://www.reddit.com/api/v1/authorize?client_id=q5I_sEYc8T_LBNdsM0x_dg&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
          name={name}
          iconImg={iconImg}
        />
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
