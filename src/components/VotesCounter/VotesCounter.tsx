import React from 'react'
import Button from '../Button/Button'
import Icon, { EIcon } from '../Icon/Icon'
import * as S from './VotesCounter.styled'

interface IVotesCounterProps {
  votes: string
}

export default function VotesCounter({ votes }: IVotesCounterProps) {
  return (
    <S.Votes>
      <Button icon={<Icon type={EIcon.Upvote} />} />
      <S.Votes>{votes}</S.Votes>
      <Button icon={<Icon type={EIcon.Downvote} />} />
    </S.Votes>
  )
}
