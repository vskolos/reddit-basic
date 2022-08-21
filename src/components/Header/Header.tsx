import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import useUserData from '../../hooks/useUserData'
import { EIcon } from '../Icon/Icon'
import Select from '../Select/Select'
import { ETitleType } from '../Title/Title'
import { EUserLinkType } from '../UserLink/UserLink'
import * as S from './Header.styled'

export default function Header() {
  const token = useSelector((state: RootState) => state.token.value)
  const user = useSelector((state: RootState) => state.user.data)

  useUserData()

  return (
    <S.Header>
      <S.Info>
        <S.HeaderUserLink
          type={EUserLinkType.Header}
          href={
            token === ''
              ? 'https://www.reddit.com/api/v1/authorize?client_id=q5I_sEYc8T_LBNdsM0x_dg&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity'
              : '#'
          }
          name={user?.name}
          iconImg={user?.iconImg}
        />
        <S.HeaderSearch />
        <S.MessagesButton icon={EIcon.Envelope} text="4" reversed={true} />
      </S.Info>
      <S.HeaderTitle type={ETitleType.Page} text="Лента новостей" />
      <Select />
    </S.Header>
  )
}
