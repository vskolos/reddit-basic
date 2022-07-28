import React from 'react'
import styles from './select.css'

export function Select() {
  return (
    <button className={styles.select}>
      <div className={styles.selectIcon}>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 7.91696V10H2.08304L8.22664 3.85641L6.14359 1.77336L0 7.91696ZM9.83752 2.24552C10.0542 2.02888 10.0542 1.67893 9.83752 1.4623L8.5377 0.162477C8.32107 -0.0541591 7.97112 -0.0541591 7.75448 0.162477L6.73795 1.179L8.821 3.26205L9.83752 2.24552Z"
            fill="#CC6633"
          />
        </svg>
      </div>
      <span className={styles.selectText}>Мои посты</span>
      <div className={styles.selectArrow}>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 6L-4.75832e-07 0.534122L0.541379 1.26775e-07L5 4.87405L9.45862 9.06345e-07L10 0.534123L5 6Z"
            fill="#CC6633"
          />
        </svg>
      </div>
    </button>
  )
}
