import React from 'react'
import { Button } from '../Button'
import { Icon, EIcon } from '../Icon'
import { Image } from '../Image'
import { Title, TitleType } from '../Title'
import { UserLink, UserLinkType } from '../UserLink'
import { VotesCounter } from '../VotesCounter'
import styles from './card.css'

export function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <UserLink type={UserLinkType.Post} />
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>4 часа
          назад
        </span>
        <Title
          As={TitleType.Post}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sequi fugiat incidunt, odio numquam in at eum vel aliquam illum!"
        />
      </div>
      <Image />
      <div className={styles.controls}>
        <VotesCounter />
        <Button
          classes={{ button: styles.comments }}
          icon={<Icon type={EIcon.Comments} />}
          text="14"
        />
        <div className={styles.actions}>
          <Button icon={<Icon type={EIcon.Share} />} />
          <Button icon={<Icon type={EIcon.Save} />} />
        </div>
      </div>
      <Button
        classes={{ button: styles.menuButton }}
        icon={<Icon type={EIcon.ThreeDots} />}
      />
    </div>
  )
}
