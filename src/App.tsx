import React from 'react'
import { hot } from 'react-hot-loader/root'
import '../node_modules/normalize.css/normalize.css'
import './main.global.css'
import { CardsList } from './shared/CardsList'
import { Layout } from './shared/Layout'
import { Header } from './shared/Header'
import { Main } from './shared/Main'

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Main>
        <CardsList />
      </Main>
    </Layout>
  )
}

export const App = hot(() => <AppComponent />)
