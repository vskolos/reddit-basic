import React from 'react'
import styles from './preview.css'

export function Preview() {
  return (
    <div className={styles.preview}>
      <img
        src="https://cdn.dribbble.com/userupload/3153602/file/original-f4c2b92cdcdbb74b06adcbe35f8103ab.png?compress=1&resize=800x600&vertical=top"
        className={styles.previewImg}
      />
    </div>
  )
}
