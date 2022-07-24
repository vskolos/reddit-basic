import React, { useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'
import './main.global.css'
import { Layout } from './shared/Layout/Layout'
import { Header } from './shared/Header'
import { Content } from './shared/Content'
import { CardsList } from './shared/CardsList'
import { useToken } from './hooks/useToken'

function AppComponent() {
  const [token] = useToken()
  return (
    <Layout>
      <Header token={token} />
      <Content>
        <CardsList />
      </Content>
    </Layout>
  )
}

export const App = hot(() => <AppComponent />)
