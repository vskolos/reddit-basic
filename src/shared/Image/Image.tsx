import React from 'react'
import styles from './image.css'

export function Image() {
  return (
    <div className={styles.image}>
      <img
        src="https://images.unsplash.com/photo-1658951279624-196e3a907f45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
        alt="image"
      />
    </div>
  )
}
