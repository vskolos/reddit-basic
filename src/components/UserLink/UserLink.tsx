import React from 'react'
import isImageUrl from '../../utils/isImageUrl'
import Icon, { EIcon } from '../Icon/Icon'
import Image from '../Image/Image'
import * as S from './UserLink.styled'

export enum EUserLinkType {
  Header,
  Post,
}

export interface IUserLinkProps {
  className?: string
  type: EUserLinkType
  name?: string
  iconImg?: string
  href?: string
}

export default function UserLink({
  className = '',
  type,
  name = 'Аноним',
  iconImg = '',
  href = '#',
}: IUserLinkProps) {
  return (
    <S.Link href={href} className={className}>
      <S.Avatar type={type}>
        {typeof iconImg === 'string' && isImageUrl(iconImg) ? (
          <Image src={iconImg} alt={`Аватар пользователя ${name}`} />
        ) : (
          <Icon type={EIcon.Anonymous} />
        )}
      </S.Avatar>
      <S.Name type={type}>{name}</S.Name>
    </S.Link>
  )
}
