import React from 'react'
import { Dropdown } from '../../../Dropdown'
import { EIcon, Icon } from '../../../Icon'
import styles from './menu.css'
import { MenuItemsList } from './MenuItemsList'

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <Icon name={EIcon.Menu} />
          </button>
        }
        children={<MenuItemsList postId="1234" />}
      />
    </div>
  )
}
