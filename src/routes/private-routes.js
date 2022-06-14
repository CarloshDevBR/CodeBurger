import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({ element }) => {
  const isAuthenticated = localStorage.getItem('codeBurger')

  return isAuthenticated ? element : <Navigate to="/login" />
}

export default ProtectedRoutes