import React, { useState } from 'react'
import { Post } from '../../../../Post'
import styles from './title.css'

interface ITitleProps {
  title: string
}

export function Title({ title }: ITitleProps) {
  const [isModalOpened, setIsModalOpened] = useState(false)
  return (
    <h2 className={styles.title} onClick={() => setIsModalOpened(true)}>
      <a href="#post-url" className={styles.postLink}>
        {title}
      </a>

      {isModalOpened && <Post onClose={() => setIsModalOpened(false)} />}
    </h2>
  )
}
