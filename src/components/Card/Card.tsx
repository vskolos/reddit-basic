import React, { useRef, useState } from 'react'
import { IPost } from '../../hooks/usePostsData'
import createdAtLabel from '../../utils/createdAtLabel'
import votesCounterLabel from '../../utils/votesCounterLabel'
import ActionsMenu from '../ActionsMenu/ActionsMenu'
import Button from '../Button/Button'
import Icon, { EIcon } from '../Icon/Icon'
import { TitleType } from '../Title/Title'
import UserLink, { EUserLinkType } from '../UserLink/UserLink'
import VotesCounter from '../VotesCounter/VotesCounter'
import * as S from './Card.styled'

interface ICardProps {
  post: IPost
}

export default function Card({ post }: ICardProps) {
  const data = post.data
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  return (
    <S.Card>
      <S.Info>
        <UserLink
          type={EUserLinkType.Post}
          name={data.author}
          iconImg={data.sr_detail.icon_img}
        />
        <S.CreatedAt>
          <S.PublishedLabel>опубликовано </S.PublishedLabel>
          {createdAtLabel(data.created)}
        </S.CreatedAt>
        <S.CardTitle type={TitleType.Post} text={data.title} />
      </S.Info>
      <S.CardImage src={data.thumbnail} />
      <S.Controls>
        <VotesCounter votes={votesCounterLabel(data.score)} />
        <S.CommentsButton
          icon={<Icon type={EIcon.Comments} />}
          text={`${data.num_comments}`}
        />
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
