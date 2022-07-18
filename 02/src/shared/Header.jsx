import {hot} from 'react-hot-loader/root'
import * as React from 'react'
import styles from './header.css'

function HeaderComponent () {
  return(
    <header className={styles.header}>
      <h1>
        Hello React
      </h1>
    </header>
  )
}

export const Header = hot(HeaderComponent)
