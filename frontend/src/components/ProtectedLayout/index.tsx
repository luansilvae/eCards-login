import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthProvider/useAuth'

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth()
  const location = useLocation()

  if (!auth.authenticated) {
    return <Navigate to="/" state={{ from: location }} />
  }

  return children
}