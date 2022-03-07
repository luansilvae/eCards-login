import { createContext, useEffect, useState } from 'react'
import { api } from '../../services/api'
import { AuthContextData, AuthProps, IUser, IUserLoginResponse, IUserRegisterResponse } from './types'
import { getUserLocalStorage, setUserLocalStorage } from './utils'

export const AuthContext = createContext({} as AuthContextData)
export function AuthProvider(props: AuthProps) {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = getUserLocalStorage()

    if (token) {
      api.defaults.headers.common.authorization = token

      setAuthenticated(true)
    }

    setLoading(false)
  }, [])

  const signIn = async (user: IUser) => {
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }

    const { data }: IUserLoginResponse = await api.post('login', user, axiosConfig)

    if (data.error) {
      return data
    }
    setAuthenticated(true)
    api.defaults.headers.common.authorization = data.token

    setUserLocalStorage(data.token)
    return true
  }

  const register = async (user: IUser) => {
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }

    const { data } : IUserRegisterResponse = await api.post('register', user, axiosConfig)

    if (data.error) {
      return data
    }

    return data
  }

  const signOut = () => {
    setAuthenticated(false)
    localStorage.removeItem('token')
    api.defaults.headers.common.Authorization = ''
  }

  return (
    <AuthContext.Provider value={{ signIn, register, signOut, authenticated, loading }}>
      {props.children}
    </AuthContext.Provider>
  )
}