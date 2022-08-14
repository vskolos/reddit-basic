import React from 'react'
import Icon, { EIcon } from '../Icon/Icon'
import * as S from './UserLink.styled'

export enum EUserLinkType {
  Header,
  Post,
}

export interface IUserLinkProps {
  className?: string
  type: EUserLinkType
  href?: string
}

export default function UserLink({
  className = '',
  type,
  href = '#',
}: IUserLinkProps) {
  return (
    <S.Link href={href} className={className}>
      <S.Avatar type={type}>
        <Icon type={EIcon.Anonymous} />
      </S.Avatar>
      <S.Name type={type}>Аноним</S.Name>
    </S.Link>
  )
}
