import React, { useContext } from 'react'
import { postContext } from '../context/postContext'
import { Card } from './Card/Card'
import styles from './cardslist.css'

export function CardsList() {
  const posts = useContext(postContext)
  const children: React.ReactNode[] = []
  if (posts.children) {
    posts.children.forEach((post) => {
      children.push(<Card key={post.data.id} post={post} />)
    })
  }
  return <ul className={styles.cardsList}>{children}</ul>
}
