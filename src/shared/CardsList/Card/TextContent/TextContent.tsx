import React from 'react'
import { UserLink } from './UserLink'
import styles from './textcontent.css'
import { Title } from './Title'
import { createdAtTextFrom } from '../../../../utils/react/createdAtTextFrom'

interface ITextContentProps {
  username: string
  date: number
  title: string
}

export function TextContent({ username, date, title }: ITextContentProps) {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink username={username} />
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          {createdAtTextFrom(date)}
        </span>
      </div>
      <Title title={title} />
    </div>
  )
}
