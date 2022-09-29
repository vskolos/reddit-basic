import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'
import { App } from '../App'
import { StaticRouter } from 'react-router-dom/server'
import compression from 'compression'
import axios from 'axios'
import * as dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(compression())

const htmlTemplate = (markup: string, token?: string) => `
  <!DOCTYPE html>
  <html lang="ru">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reddit</title>
    <script src="/static/index.js" type="application/javascript"></script>
    <script>window.__token__ = '${token ?? ''}'</script>
  </head>

  <body>
    <div id="react_root">${markup}</div>
    <div id="modal_root"></div>
  </body>

  </html>
`

app.use('/static', express.static('./dist/client'))

app.get('/auth', (req, res) => {
  axios
    .post(
      'https://www.reddit.com/api/v1/access_token',
      `grant_type=authorization_code&code=${
        req.query.code
      }&redirect_uri=${process.env.URI!}/auth`,
      {
        auth: {
          username: process.env.CLIENT_ID!,
          password: process.env.SECRET!,
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
    .then(({ data: { access_token: token } }) => {
      res.status(200).send(
        htmlTemplate(
          ReactDOM.renderToString(
            <StaticRouter location={req.url}>
              <App />
            </StaticRouter>
          ),
          token
        )
      )
    })
    .catch(console.log)
})

app.get('/login', (_, res) => {
  return res.redirect(
    `https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=${process.env.URI}/auth&duration=permanent&scope=read submit identity`
  )
})

app.get('/', (_, res) => {
  return res.redirect('/posts')
})

app.get('*', (req, res) => {
  res.send(
    htmlTemplate(
      ReactDOM.renderToString(
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
      )
    )
  )
})

app.listen(PORT, () => {
  console.log(`server started on port http://localhost:${PORT}`)
})
