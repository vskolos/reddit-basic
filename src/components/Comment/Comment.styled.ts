import styled from 'styled-components'
import Button from '../Button/Button'
import CommentForm from '../CommentForm/CommentForm'

export const CommentBlock = styled.div`
  display: grid;
  gap: 20px;
  overflow: hidden;

  @media (min-width: 1024px) {
    gap: 40px;
  }

  & > & {
    padding-left: 10px;
    border-left: 3px solid var(--grayD9);

    @media (min-width: 1024px) {
      padding-left: 30px;
    }
  }

  & > div {
    grid-column: span 2;
  }
`

export const Comment = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  gap: 11px 5px;
`

export const CreatedAt = styled.span`
  font-size: 10px;
  line-height: 12px;
  color: var(--gray99);

  @media (min-width: 1024px) {
    font-size: 14px;
    line-height: 16px;
  }
`

export const Text = styled.p`
  margin: 0;
  grid-column: span 2;
  font-size: 14px;
  line-height: 16px;
`

export const Actions = styled.div`
  grid-column: span 2;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (min-width: 1024px) {
    gap: 27px;
  }
`

export const ActionButton = styled(Button)`
  color: var(--gray99);
  font-size: 14px;
  line-height: 16px;

  & > span {
    display: none;

    @media (min-width: 576px) {
      display: initial;
    }
  }
`

export const ReplyForm = styled(CommentForm)`
  grid-column: span 2;
`
