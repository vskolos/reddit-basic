import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import CardsList from './components/CardsList/CardsList'
import Layout from './components/Layout/Layout'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { GlobalStyle } from './App.styled'
import { tokenContext } from './context/tokenContext'
import { commentContext } from './context/commentContext'
import { useToken } from './hooks/useToken'
import { UserContextProvider } from './context/userContext'
import { PostsContextProvider } from './context/postsContext'

function AppComponent() {
  const [commentValue, setCommentValue] = useState('')
  const [token] = useToken()

  return (
    <tokenContext.Provider value={token}>
      <UserContextProvider>
        <PostsContextProvider>
          <commentContext.Provider
            value={{
              value: commentValue,
              onChange: setCommentValue,
            }}
          >
            <Layout>
              <GlobalStyle />
              <Header />
              <Main>
                <CardsList />
              </Main>
            </Layout>
          </commentContext.Provider>
        </PostsContextProvider>
      </UserContextProvider>
    </tokenContext.Provider>
  )
}

export const App = hot(() => <AppComponent />)
