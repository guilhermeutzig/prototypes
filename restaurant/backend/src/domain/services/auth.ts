import Login from '../../infrastructure/database/models/login'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class Auth {
  private generateToken (model: any) {
    const secret = process.env.JWT_SECRET_KEY || ''
    if (secret) return jwt.sign(JSON.stringify(model), secret)
  }

  public async login (loginName: string, password: string) {
    const model = await Login.findOne({ where: { loginName } })
    if (model) {
      const samePassword = await bcrypt.compare(password, model.passwordHash)
      if (samePassword) return this.generateToken(model)
    }
  }
}

export default new Auth()
