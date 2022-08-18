import React from 'react'
import * as S from './Layout.styled'

interface ILayoutProps {
  children?: React.ReactNode
}

export default function Layout({ children }: ILayoutProps) {
  return <S.Layout>{children}</S.Layout>
}
