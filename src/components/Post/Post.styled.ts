import styled from 'styled-components'
import Button from '../Button/Button'
import CommentForm from '../CommentForm/CommentForm'
import Comments from '../Comments/Comments'
import Title from '../Title/Title'
import VotesCounter from '../VotesCounter/VotesCounter'

export const Backdrop = styled.div`
  padding: 20px;
  position: fixed;
  display: grid;
  justify-items: center;
  align-items: center;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 0.5);
  cursor: pointer;
  overflow: auto;
  z-index: 500;

  @media (min-width: 1024px) {
    padding: 60px;
  }
`

export const Post = styled.div`
  position: relative;
  max-width: 960px;
  width: 100%;
  padding: 20px;
  display: grid;
  gap: 10px;
  background-color: var(--white);
  cursor: initial;

  @media (min-width: 1024px) {
    grid-template-columns: auto 1fr;
    padding: 52px 60px;
    gap: 20px;
  }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-items: start;
  align-items: center;
  gap: 7px 6px;

  @media (min-width: 1024px) {
    grid-column: 2;
  }
`

export const CreatedAt = styled.span`
  font-size: 10px;
  line-height: 12px;
  color: var(--gray99);
  grid-column: 2;

  @media (min-width: 1024px) {
    grid-row: 2;
    grid-column: 1;
    font-size: 14px;
    line-height: 16px;
  }
`

export const PublishedLabel = styled.span`
  display: none;

  @media (min-width: 1024px) {
    display: initial;
  }
`

export const PostTitle = styled(Title)`
  grid-column: span 2;

  @media (min-width: 1024px) {
    grid-row: 1;
  }
`

export const Content = styled.div`
  @media (min-width: 1024px) {
    grid-column: span 2;
  }
`

export const PostVotesCounter = styled(VotesCounter)`
  @media (min-width: 1024px) {
    grid-row: 1;
  }
`

export const CloseButton = styled(Button)`
  position: absolute;
  top: 7px;
  right: 7px;

  @media (min-width: 1024px) {
    top: 30px;
    right: 20px;
  }

  & svg {
    width: 12px;
    height: 12px;

    @media (min-width: 1024px) {
      width: auto;
      height: auto;
    }
  }
`

export const PostCommentForm = styled(CommentForm)`
  @media (min-width: 1024px) {
    grid-column: span 2;
  }
`

export const PostComments = styled(Comments)`
  @media (min-width: 1024px) {
    grid-column: span 2;
  }
`
