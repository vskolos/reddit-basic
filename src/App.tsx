import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import './main.global.css'
import { Layout } from './shared/Layout/Layout'
import { Header } from './shared/Header'
import { Content } from './shared/Content'
import { CardsList } from './shared/CardsList'
import { useToken } from './hooks/useToken'
import { tokenContext } from './shared/context/tokenContext'
import { commentContext } from './shared/context/commentContext'
import { UserContextProvider } from './shared/context/userContext'
import { PostsContextProvider } from './shared/context/postsContext'

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
              <Header />
              <Content>
                <CardsList />
              </Content>
            </Layout>
          </commentContext.Provider>
        </PostsContextProvider>
      </UserContextProvider>
    </tokenContext.Provider>
  )
}

export const App = hot(() => <AppComponent />)
