import React from 'react'
import { MessagesButton } from '../MessagesButton'
import { Search } from '../Search'
import { Select } from '../Select'
import { Title } from '../Title'
import { UserButton } from '../UserButton'
import styles from './header.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInfo}>
        <UserButton />
        <Search />
        <MessagesButton />
      </div>
      <Title />
      <Select />
    </header>
  )
}
