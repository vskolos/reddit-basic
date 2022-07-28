import React from 'react'
import styles from './main.css'

interface ILayoutProps {
  children?: React.ReactNode
}

export function Main({ children }: ILayoutProps) {
  return <main className={styles.main}>{children}</main>
}
