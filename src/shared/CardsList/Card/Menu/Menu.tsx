import React from 'react'
import { Dropdown } from '../../../Dropdown'
import styles from './menu.css'
import { MenuButton } from './MenuButton'
import { MenuItemsList } from './MenuItemsList'

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown button={<MenuButton />} children={<MenuItemsList />} />
    </div>
  )
}
