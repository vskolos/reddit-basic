import React from 'react'
import ReactDOM from 'react-dom'
import usePostModal from '../../hooks/usePostModal'
import * as S from './Post.styled'

export interface IPost {
  data: {
    id: string
    author: string
    created: number
    num_comments: number
    thumbnail: string
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
  const data = post.data

  const modalRoot = document.querySelector('#modal_root')
  if (!modalRoot) return null

  return ReactDOM.createPortal(
    <S.Backdrop>
      <S.Post ref={modal}>{data.selftext}</S.Post>
      {/* <VotesCounter votes={votesCounterLabel(data.score)} />
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
      </S.Info> */}
    </S.Backdrop>,
    modalRoot
  )
}
