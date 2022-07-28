import React from 'react'
import { Icon, EIcon } from '../Icon'
import styles from './select.css'

export function Select() {
  return (
    <button className={styles.select}>
      <div className={styles.icon}>
        <Icon type={EIcon.Pencil} />
      </div>
      <span className={styles.text}>Мои посты</span>
      <div className={styles.arrow}>
        <Icon type={EIcon.DownArrow} />
      </div>
    </button>
  )
}
