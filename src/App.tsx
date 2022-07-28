import React from 'react'
import { hot } from 'react-hot-loader/root'
import '../node_modules/normalize.css/normalize.css'
import './main.global.css'
import { Container } from './shared/components/Container'
import { Header } from './shared/components/Header'

function AppComponent() {
  return (
    <Container>
      <Header />
    </Container>
  )
}

export const App = hot(() => <AppComponent />)
