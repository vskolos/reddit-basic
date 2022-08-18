import React, { useRef, useState } from 'react'
import createdAtLabel from '../../utils/createdAtLabel'
import counterLabel from '../../utils/counterLabel'
import ActionsMenu from '../ActionsMenu/ActionsMenu'
import Button from '../Button/Button'
import Icon, { EIcon } from '../Icon/Icon'
import Post, { IPost } from '../Post/Post'
import { ETitleType } from '../Title/Title'
import UserLink, { EUserLinkType } from '../UserLink/UserLink'
import VotesCounter from '../VotesCounter/VotesCounter'
import * as S from './Card.styled'

interface ICardProps {
  post: IPost
}

export default function Card({ post }: ICardProps) {
  const data = post.data
  const [isPostModalOpen, setIsPostModalOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  return (
    <S.Card onClick={() => setIsPostModalOpen(true)}>
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
        <S.CardTitle type={ETitleType.Post} text={data.title} />
      </S.Info>
      <S.CardImage src={data.url} />
      <S.Controls>
        <VotesCounter votes={counterLabel(data.score)} />
        <S.CommentsButton
          icon={<Icon type={EIcon.Comments} />}
          text={counterLabel(data.num_comments)}
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
      {isPostModalOpen && (
        <Post post={post} onClose={() => setIsPostModalOpen(false)} />
      )}
    </S.Card>
  )
}
