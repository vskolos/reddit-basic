import React from 'react'

type LayoutProps = {
  children?: React.ReactNode
}

export default function Main({ children }: LayoutProps) {
  return <main>{children}</main>
}
