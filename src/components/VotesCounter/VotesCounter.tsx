import React from 'react'
import Button from '../Button/Button'
import Icon, { EIcon } from '../Icon/Icon'
import * as S from './VotesCounter.styled'

interface IVotesCounterProps {
  className?: string
  votes: string
}

export default function VotesCounter({ className, votes }: IVotesCounterProps) {
  return (
    <S.Votes className={className}>
      <Button icon={EIcon.Upvote} />
      <S.Votes>{votes}</S.Votes>
      <Button icon={EIcon.Downvote} />
    </S.Votes>
  )
}
