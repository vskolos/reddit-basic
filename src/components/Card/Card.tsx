import React, { useRef, useState } from 'react'
import ActionsMenu from '../ActionsMenu/ActionsMenu'
import Button from '../Button/Button'
import Icon, { EIcon } from '../Icon/Icon'
import { TitleType } from '../Title/Title'
import UserLink, { EUserLinkType } from '../UserLink/UserLink'
import VotesCounter from '../VotesCounter/VotesCounter'
import * as S from './Card.styled'

export default function Card() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  return (
    <S.Card>
      <S.Info>
        <UserLink type={EUserLinkType.Post} />
        <S.CreatedAt>
          <S.PublishedLabel>опубликовано </S.PublishedLabel>4 часа назад
        </S.CreatedAt>
        <S.CardTitle
          type={TitleType.Post}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sequi fugiat incidunt, odio numquam in at eum vel aliquam illum!"
        />
      </S.Info>
      <S.CardImage />
      <S.Controls>
        <VotesCounter />
        <S.CommentsButton icon={<Icon type={EIcon.Comments} />} text="14" />
        <S.Actions>
          <Button icon={<Icon type={EIcon.Share} />} />
          <Button icon={<Icon type={EIcon.Save} />} />
        </S.Actions>
      </S.Controls>
      <S.Dropdown ref={dropdownRef}>
        <S.MenuButton
          icon={<Icon type={EIcon.ThreeDots} />}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <ActionsMenu
          container={dropdownRef}
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      </S.Dropdown>
    </S.Card>
  )
}
