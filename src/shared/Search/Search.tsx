import React from 'react'
import { Icon, EIcon } from '../Icon'
import styles from './search.css'

export function Search() {
  return (
    <div className={styles.search}>
      <div className={styles.icon}>
        <Icon type={EIcon.Search} />
      </div>
      <input type="text" className={styles.input} placeholder="Поиск" />
    </div>
  )
}
