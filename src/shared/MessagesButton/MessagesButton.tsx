import React from 'react'
import { Icon, EIcon } from '../Icon'
import styles from './messagesbutton.css'

export function MessagesButton() {
  return (
    <button className={styles.button}>
      <span className={styles.count}>4</span>
      <div className={styles.icon}>
        <Icon type={EIcon.Envelope} />
      </div>
    </button>
  )
}
