import React from 'react'
import * as S from './Layout.styled'

type LayoutProps = {
  children?: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return <S.Layout>{children}</S.Layout>
}
