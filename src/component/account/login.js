import { useEffect, useState } from 'react'
import { loginThunk, signupThunk } from '../../Redux/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Login (props) {
  console.log(props.signup)
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const signupFunc = () => {
    console.log('signup redux thunk')
    dispatch(signupThunk(email, password, username))
  }

  const loginFunc = () => {
    console.log('send to redux thunk')
    dispatch(loginThunk(email, password))
  }
  const isLoggedIn = useSelector(state => state.authStore.isLoggedIn)
  useEffect(() => {
    isLoggedIn ? navigate('/BestSellerPage') : console.log('Hello')
  })

  return (
    <div>
      {props.signup ? (
        <div>
          {' '}
          <h3>Signup!</h3>
          <input
            type='text'
            value={username}
            placeholder='insert username here'
            onChange={e => setUsername(e.target.value)}
          />
        </div>
      ) : (
        <h3>Login</h3>
      )}
      <input
        type='text'
        value={email}
        placeholder='insert email here'
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type='text'
        value={password}
        placeholder='insert password here'
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={() => (props.signup ? signupFunc() : loginFunc())}>
        {props.signup ? 'Signup' : 'Login'}
      </button>
    </div>
  )
}

