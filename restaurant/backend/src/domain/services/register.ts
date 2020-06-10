import Login from '../../infrastructure/database/models/login'
import bcrypt from 'bcrypt'

class RegisterService {
  public async register(username: string, password: string) {
    const userExists = await Login.findOne({ where: { loginName: username } })
    if (!userExists) {
      const passwordHash = await bcrypt.hash(password, 8);
      const model = Login.create({ loginName: username, passwordHash })
      if (model) return model
      return null
    }
    return null
  }
}

export default new RegisterService()
