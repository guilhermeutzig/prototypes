import { Application, Request, Response } from 'express'

import UserRoutes from '../modules/user/routes'

class Routes {
  private router: UserRoutes

  constructor(app: Application) {
    this.router = new UserRoutes()
    this.getRoutes(app)
  }

  getRoutes(app: Application): void {
    app.route('/api/user/all').get(this.router.index)
    app.route('/api/users/create').post(this.router.create)
    app.route('/api/users/:id').get(this.router.findOne)
    app.route('/api/users/:id/update').put(this.router.update)
    app.route('/api/users/:id/delete').delete(this.router.delete)
  }
}

export default Routes
