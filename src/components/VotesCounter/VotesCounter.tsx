import React from 'react'
import Button from '../Button/Button'
import Icon, { EIcon } from '../Icon/Icon'
import * as S from './VotesCounter.styled'

export default function VotesCounter() {
  return (
    <S.Votes>
      <Button icon={<Icon type={EIcon.Upvote} />} />
      <S.Votes>24</S.Votes>
      <Button icon={<Icon type={EIcon.Downvote} />} />
    </S.Votes>
  )
}
