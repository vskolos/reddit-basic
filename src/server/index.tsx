import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'
import { App } from '../App'
import { StaticRouter } from 'react-router-dom/server'
import compression from 'compression'

const PORT = process.env.PORT || 3000

const app = express()

app.use(compression())

const htmlTemplate = (markup: string): string => `
  <!DOCTYPE html>
  <html lang="ru">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reddit</title>
    <script src="/static/client.js" type="application/javascript"></script>
  </head>

  <body>
    <div id="react_root">${markup}</div>
    <div id="modal_root"></div>
  </body>

  </html>
`

app.use('/static', express.static('./dist/client'))

app.get('/', (req, res) => {
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
