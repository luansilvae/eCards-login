import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { prismaClient } from '../prisma'

class UserService {
  async register(name: string, email: string, password: string) {
    if (!name) {
      throw new Error('Informe o campo nome.')
    }

    if (!email) {
      throw new Error('Informe o campo email.')
    }

    if (!password) {
      throw new Error('Informe o campo senha.')
    }

    let user = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })

    if (!user) {
      user = await prismaClient.user.create({
        data: {
          name,
          email,
          password
        }
      })
    } else {
      throw new Error('Uma conta com esse email já existe.')
    }

    return true
  }

  async login(email: string, password: string) {
    if (!email) {
      throw new Error('Informe o campo email!')
    }

    if (!password) {
      throw new Error('Informe o campo senha!')
    }

    const user = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })

    if (!user) {
      throw { email: 'Usuário não encontrado.' }
    }

    const matchPassword = await bcrypt.compare(password, user.password)

    if (!matchPassword) {
      throw { password: 'Senha incorreta.' }
    }

    const token = jwt.sign(
      {
        user: {
          id: user.id,
          email: user.email
        }
      },
      'secret',
      {
        subject: user.id,
        expiresIn: '1d'
      }
    )

    return { token }
  }
}

export { UserService }
