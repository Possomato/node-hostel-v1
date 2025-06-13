import express from 'express'
import dotenv from 'dotenv'
import mustacheExpress from 'mustache-express'
import path from 'path'

import routes from './routes'

dotenv.config()

const server = express()

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustacheExpress())

server.use(express.static(path.join(__dirname, '../public')))

server.use(routes)

server.use((req, res) => {
  res.send('404')
})

server.listen(process.env.PORT)
