import React from 'react'
import ReactDOM from 'react-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import usePostModal from '../../hooks/usePostModal'
import counterLabel from '../../utils/counterLabel'
import createdAtLabel from '../../utils/createdAtLabel'
import { EIcon } from '../Icon/Icon'
import Image from '../Image/Image'
import { ETitleType } from '../Title/Title'
import UserLink, { EUserLinkType } from '../UserLink/UserLink'
import * as S from './Post.styled'

export interface IPost {
  data: {
    id: string
    author: string
    created: number
    num_comments: number
    url: string
    title: string
    selftext: string
    score: number
    sr_detail: {
      icon_img: string
    }
  }
  kind: string
}

interface IPostProps {
  post: IPost
  onClose?: () => void
}

export default function Post({ post, onClose }: IPostProps) {
  const [modal] = usePostModal(onClose)
  const name = useSelector((state: RootState) => state.user.data.name)
  const data = post.data

  const modalRoot = document.querySelector('#modal_root')
  if (!modalRoot) return null

  return ReactDOM.createPortal(
    <S.Backdrop>
      <S.Post ref={modal}>
        <S.Info>
          <S.PostTitle type={ETitleType.Post} text={data.title} />
          <UserLink
            type={EUserLinkType.Post}
            name={data.author}
            iconImg={data.sr_detail.icon_img}
          />
          <S.CreatedAt>
            <S.PublishedLabel>опубликовано </S.PublishedLabel>
            {createdAtLabel(data.created)}
          </S.CreatedAt>
        </S.Info>
        <S.PostVotesCounter votes={counterLabel(data.score)} />
        <S.Content>
          <Image src={data.url} />
        </S.Content>
        <S.PostCommentForm username={name} />
        <S.PostComments postId={data.id} />
        <S.CloseButton icon={EIcon.Close} onClick={onClose} />
      </S.Post>
    </S.Backdrop>,
    modalRoot
  )
}
