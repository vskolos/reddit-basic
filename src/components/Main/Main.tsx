import React from 'react'

interface ILayoutProps {
  children?: React.ReactNode
}

export default function Main({ children }: ILayoutProps) {
  return <main>{children}</main>
}
