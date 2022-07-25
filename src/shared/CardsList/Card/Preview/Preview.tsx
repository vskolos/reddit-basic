import React from 'react'
import styles from './preview.css'

interface IPreviewProps {
  thumbnail: string
}

export function Preview({ thumbnail }: IPreviewProps) {
  return (
    <div className={styles.preview}>
      {thumbnail &&
        thumbnail !== 'nsfw' &&
        thumbnail !== 'default' &&
        thumbnail !== 'self' &&
        thumbnail !== 'spoiler' && (
          <img src={thumbnail} className={styles.previewImg} />
        )}
    </div>
  )
}
