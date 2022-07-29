import { loginThunk } from '../Redux/authSlice'
import UserForm from './Form'

function Login () {
  return <UserForm name='login' thunk={loginThunk} />
}

export default Login
