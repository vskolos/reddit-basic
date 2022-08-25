import React from 'react'
import { hot } from 'react-hot-loader/root'
import CardsList from './components/CardsList/CardsList'
import Layout from './components/Layout/Layout'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { GlobalStyle } from './App.styled'
import { Provider } from 'react-redux'
import { store } from './app/store'
import useToken from './hooks/useToken'
import { Navigate, Route, Routes } from 'react-router-dom'
import Post from './components/Post/Post'
import Token from './components/Token/Token'
import Title, { ETitleType } from './components/Title/Title'

function AppComponent() {
  useToken()

  return (
    <Layout>
      <Header />
      <Main>
        <Routes>
          <Route
            path="*"
            element={
              <Title
                type={ETitleType.Page}
                text="404 – Страница не найдена. Нажмите для перехода на главную"
                href="/"
              />
            }
          />
          <Route path="/" element={<Navigate to="posts" replace />} />
          <Route path="auth" element={<Token />} />
          <Route path="posts" element={<CardsList />}>
            <Route path=":id" element={<Post />} />
          </Route>
        </Routes>
      </Main>
    </Layout>
  )
}

export const App = hot(() => (
  <Provider store={store}>
    <GlobalStyle />
    <AppComponent />
  </Provider>
))
