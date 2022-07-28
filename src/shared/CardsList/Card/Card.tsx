import React from 'react'
import { IPost } from '../../../hooks/usePostsData'
import styles from './card.css'
import { Controls } from './Controls'
import { Menu } from './Menu'
import { Preview } from './Preview'
import { TextContent } from './TextContent'

interface ICardProps {
  post: IPost
}

export function Card({ post }: ICardProps) {
  const data = post.data
  return (
    <li className={styles.card}>
      <TextContent
        username={data.author}
        date={data.created}
        title={data.title}
      />
      <Preview thumbnail={data.thumbnail} />
      <Menu />
      <Controls karma={data.score} comments={data.num_comments} />
    </li>
  )
}
