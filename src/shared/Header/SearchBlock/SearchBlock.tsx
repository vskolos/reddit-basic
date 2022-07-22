import React from 'react'
import { UserBlock } from './UserBlock'
import styles from './searchblock.css'

export function SearchBlock() {
  return (
    <div className={styles.searchBlock}>
      <UserBlock />
    </div>
  )
}
