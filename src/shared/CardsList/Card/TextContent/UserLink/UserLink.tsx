import React from 'react'
import styles from './userlink.css'

export function UserLink() {
  return (
    <div className={styles.userLink}>
      <img
        src="https://cdn.dribbble.com/users/758684/avatars/mini/7609b04691b5b61f8baa2f4f1496f494.jpg"
        alt="avatar"
        className={styles.avatar}
      />
      <a href="#user-url" className={styles.username}>
        Дмитрий Гришин
      </a>
    </div>
  )
}
