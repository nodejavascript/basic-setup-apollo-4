import 'dotenv/config'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { makeExecutableSchema } from '@graphql-tools/schema'

import express from 'express'
import http from 'http'
import helmet from 'helmet'
import cors from 'cors'
import { json } from 'body-parser'
import routes from './routes'

import beep from 'beepbeep'

import typeDefs from './typeDefs'
import resolvers from './resolvers'
import { applyDirectives } from './directives'

import { datatimeFormatted } from './lib'
import { returnVersion } from './logic'

const { APP_PORT, NODE_ENV } = process.env

const isLocal = NODE_ENV === 'development'

export const startApi = async () => {
  try {
    // isLocal && console.clear()
    isLocal && console.info('--------\n\n')

    const app = express()

    app.disable('x-powered-by')

    const httpServer = http.createServer(app)

    // app.use((req, res, next) => {
    //   console.log('req', req.headers)
    //   next()
    // })

    const origin = []

    isLocal && origin.push('http://localhost:3000')

    app.use(cors({
      origin,
      credentials: true
    }))

    let schema = makeExecutableSchema({
      typeDefs,
      resolvers
    })
    schema = applyDirectives(schema)

    const server = new ApolloServer({
      schema,
      plugins: []
    })

    await server.start()

    const contentSecurityPolicy = !isLocal ? false : undefined
    app.use(helmet({ contentSecurityPolicy }))

    app.use(
      '/graphql',
      cors({ origin }),
      json(),
      expressMiddleware(server, {
        context: async ({ req, res }) => {
          return { req, res }
        }
      })
    )

    app.get('/favicon.ico', (req, res) => res.sendStatus(204))
    app.use('/ping', routes.ping)

    await httpServer.listen({ port: APP_PORT })

    const now = datatimeFormatted()
    const version = returnVersion()

    let message = `${NODE_ENV} ${APP_PORT} - startup, ${now}, ${version}`

    if (isLocal) {
      message += `\nhttp://localhost:${APP_PORT}/ping`
    }

    if (isLocal) {
      beep(2)
      console.info(message)
    }
  } catch (err) {
    console.error('server statup error', err)
  }
}
