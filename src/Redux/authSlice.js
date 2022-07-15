// importing the function from REdux toolkit --> the function is used to make the reducer
import { createSlice } from '@reduxjs/toolkit'

// initial state pbject --> this is the state that the react redux application loads with
const initialState = {
  isLoggedIn: false || localStorage.getItem('CA_TOKEN') != null
}

// is Logged in verifies that the student or client has loggedin before, do they have the token in local storage?

// below is the slice - inside the slice, you have a set of actions, in your reducer

// YOU MUST EXPORT ACTIONS && YOUR REDUCER, outside of createSlice.
export const authSlice = createSlice({
  // This name is used for the internal actions and action creators made in Redux
  name: 'auth',
  // You are using the initial state
  initialState,
  // Define the action (functions) to alter the initialState, stored wtihin a reducer
  reducers: {
    login: (state, action) => {
      // changing boolean to true
      state.isLoggedIn = true
    },
    logout: (state, action) => {
      // changing boolean to false
      state.isLoggedIn = false
    }
  }
})

// export actions to be used in components
export const { login, logout } = authSlice.actions

// create an asynchronous login action , accept email and password
export const loginThunk = (email, password) => async dispatch => {
  // dispatch is here to update the redux store
  const data = { email, password } // create a data object
  // Send data to this API
  fetch('https://ca.xccelerate.co/auth/login', {
    method: 'POST', // post request
    crossDomain: true, // Cross origin resource sharing is now true
    headers: {
      'Content-Type': 'application/json' // define data type being sent
    },
    body: JSON.stringify(data) // body and information being sent
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data.userInfo)
      // store our token in local storage
      localStorage.setItem('CA_TOKEN', data.userInfo.token)
      dispatch(login())
    })
}

// make a thunk action to remove the token from local storage && update redux
export const logoutThunk = () => async dispatch => {
  localStorage.removeItem('CA_TOKEN') // remove token
  dispatch(logout()) //Logout in redux, update boolean
}

// Signup thunk request - recieves, email, password, username
export const signupThunk = (email, password, username) => async dispatch => {
  // Create a data variable object
  const data = { email, password, username }
  // send data to this API
  fetch('https://ca.xccelerate.co/auth/signup', {
    method: 'POST', // Thi is a post request
    crossDomain: true, // Allow your application to interact with another domain name
    headers: {
      'Content-Type': 'application/json'
    }, // specify the content type which in this case is json
    body: JSON.stringify(data) // send the data in the body
  })
    .then(response => response.json()) // process the response so its usable
    .then(data => {
      console.log('Success:', data) // console.log response on the page.
    })
}

// eport reducer to be used in store
export default authSlice.reducer
