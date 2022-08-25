import React from 'react'
import ReactDOM from 'react-dom'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { selectPostById } from '../../app/postsSlice'
import { RootState } from '../../app/store'
import usePostModal from '../../hooks/usePostModal'
import counterLabel from '../../utils/counterLabel'
import createdAtLabel from '../../utils/createdAtLabel'
import { EIcon } from '../Icon/Icon'
import Image from '../Image/Image'
import { ETitleType } from '../Title/Title'
import UserLink, { EUserLinkType } from '../UserLink/UserLink'
import * as S from './Post.styled'

export type PostData = {
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

export default function Post() {
  const navigate = useNavigate()
  const [modal] = usePostModal(() => navigate('..'))

  const { id } = useParams()
  if (!id) return null

  const name = useSelector((state: RootState) => state.user.data.name)
  const post = useSelector((state: RootState) => selectPostById(state, id))
  if (!post) return <Navigate to="/404" />

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
          <S.Text>{data.selftext}</S.Text>
        </S.Content>
        <S.PostCommentForm username={name} />
        <S.PostComments postId={data.id} />
        <S.CloseButton icon={EIcon.Close} onClick={() => navigate('..')} />
      </S.Post>
    </S.Backdrop>,
    modalRoot
  )
}
