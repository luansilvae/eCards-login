import { Request, Response } from 'express'
import bcrypt from 'bcrypt'

import { UserService } from '../services/UserService'

class UserController {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body

      const service = new UserService()

      const user = await service.login(email, password)
      return res.json(user)
    } catch (err) {
      return res.json({ error: err })
    }
  }

  async register(req: Request, res: Response) {
    try {
      const { email, name, password } = req.body

      const hashedPassword: string = await bcrypt.hash(password, 10)

      const service = new UserService()

      const user = await service.register(name, email, hashedPassword)

      return res.json(user)
    } catch (err: any) {
      return res.json({ error: err })
    }
  }
}

export { UserController }
