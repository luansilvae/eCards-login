import { ReactNode } from 'react'

export interface IUser {
  name?: string
  email: string
  password: string
}

export interface IUserLoginResponse {
  data: {
    token: string
    error: {
      email: string
      password: string
    }
  }
}

export interface AuthContextData {
  authenticated: boolean
  signIn: (user: IUser) => Promise<any>
  signOut: () => void
  loading: boolean
}

export interface AuthProps {
  children: ReactNode
}