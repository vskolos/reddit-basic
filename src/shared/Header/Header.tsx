import React from 'react'
import { MessagesButton } from '../MessagesButton'
import { Search } from '../Search'
import { Select } from '../Select'
import { Title, TitleType } from '../Title'
import { UserLink, UserLinkType } from '../UserLink'
import styles from './header.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.info}>
        <UserLink type={UserLinkType.Header} />
        <Search />
        <MessagesButton />
      </div>
      <Title As={TitleType.Page} text="Лента новостей" />
      <Select />
    </header>
  )
}
