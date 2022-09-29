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
  const userStatus = useSelector((state: RootState) => state.user.status)

  useUserData()

  return (
    <S.Header>
      <S.Info>
        <S.HeaderUserLink
          type={EUserLinkType.Header}
          href={!token || token === '' ? `/login` : '#'}
          name={userStatus === 'loading' ? 'Загрузка...' : user?.name}
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
