import { Router, Request, Response } from 'express'
import { UserController } from './controllers/UserController'

const routes = Router()

const user = new UserController()

routes.get('/', (request: Request, response: Response) => {
  return response.status(200).json({
    message: 'Hello, world!! 👋'
  })
})

routes.post('/login', user.login)
routes.post('/register', user.register)

export { routes }
