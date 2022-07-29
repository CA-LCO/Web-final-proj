import { signupThunk } from '../Redux/authSlice'
import UserForm from './Form'

function Signup () {
  return <UserForm signup name='signup' thunk={signupThunk} />
}

export default Signup
