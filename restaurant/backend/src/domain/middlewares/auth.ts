import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {

  if (req.originalUrl !== '/login' && req.originalUrl !== '/register') {
    const authHeader = req.headers.authorization
    if (!authHeader) return res.status(401).json({ message: 'Token not provided' })

    try {
      const [, token] = authHeader.split(' ')
      const secret = process.env.JWT_SECRET_KEY || ''
      const user = await jwt.verify(token, secret)
      req.app.set('user', user)
      return next()
    } catch (err) {
      return res.status(401).json({ message: 'Invalid Token' })
    }
  }
  return next()

}

export default authMiddleware
