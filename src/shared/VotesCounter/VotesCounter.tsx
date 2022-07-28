import React from 'react'
import { Button } from '../Button'
import { EIcon, Icon } from '../Icon'
import styles from './votescounter.css'

export function VotesCounter() {
  return (
    <div className={styles.votes}>
      <Button icon={<Icon type={EIcon.Upvote} />} />
      <span className={styles.count}>24</span>
      <Button icon={<Icon type={EIcon.Downvote} />} />
    </div>
  )
}
