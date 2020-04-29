import { Application, Request, Response } from 'express'

class Routes {
  constructor(app: Application) {
    this.getRoutes(app)
  }

  getRoutes(app: Application): void {
    app
      .route('/')
      .get((req: Request, res: Response) => res.send('Hello world!'))

    app
      .route('/ola/:name')
      .get((req: Request, res: Response) =>
        res.send(`Hello ${req.params.name}`)
      )
  }
}

export default Routes
