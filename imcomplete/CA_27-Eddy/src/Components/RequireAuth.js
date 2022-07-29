import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export default function RequireAuth(props) {
  const isAuthenticated = useSelector(state => state.authStore.isAuthenticated)
  return isAuthenticated ? props.children : <Navigate to={props.redirectTo}/>
}