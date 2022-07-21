import React from 'react'
import { Dropdown } from '../../../Dropdown'
import { MenuIcon } from '../../../Icons'
import styles from './menu.css'
import { MenuItemsList } from './MenuItemsList'

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <MenuIcon />
          </button>
        }
        children={<MenuItemsList />}
      />
    </div>
  )
}
