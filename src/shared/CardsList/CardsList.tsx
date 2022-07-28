import React from 'react'
import { Card } from '../Card'
import styles from './cardslist.css'

export function CardsList() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Card />
      </li>
      <li className={styles.item}>
        <Card />
      </li>
      <li className={styles.item}>
        <Card />
      </li>
    </ul>
  )
}
