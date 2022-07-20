import React from 'react'
import styles from './title.css'

export function Title() {
  return (
    <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
        obcaecati quasi similique eveniet non voluptate magnam cumque inventore
        omnis doloribus.
      </a>
    </h2>
  )
}
