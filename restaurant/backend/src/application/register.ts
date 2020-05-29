import registerService from './../domain/services/register'

class RegisterUser {
  public async register (username: string, password: string) {
    return registerService.register(username, password)
  }
}

export default new RegisterUser()
