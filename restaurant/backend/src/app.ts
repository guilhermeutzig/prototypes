import express from 'express'
import bodyParser from 'body-parser'
import routes from './interfaces/routes'
import morgan from './infrastructure/helpers/morgan'
import authMiddleware from './domain/middlewares/auth'

class App {
    public express: express.Application

    constructor () {
      // app instance
      this.express = express()
      // logging
      this.express.use(morgan)
      // body parser
      this.express.use(bodyParser.urlencoded({
        extended: true
      }))
      // global middlewares, before any route.
      this.express.use(express.json())
      this.express.use(authMiddleware)
      // routes
      this.express.use(routes)
    }
}

export default new App().express
