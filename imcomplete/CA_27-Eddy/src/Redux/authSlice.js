// Create the authSlice in this file
// Create the login and logout actions within the authSlice reducer
// Create a signup thunk action
// Create a login thunk action
// Create a logout thunk action

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false || localStorage.getItem("JWT_Token") != null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.isAuthenticated = false
    }
  }
})

export const {login, logout} = authSlice.actions

export const loginThunk = (email, password) => async dispatch => {
  const data = {email, password}
  fetch("https://ca.xccelerate.co/auth/login", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then((data) => {
      localStorage.setItem("JWT_Token", data.userInfo.token)
      dispatch(login())
    })
}

export const logoutThunk = () => async dispatch => {
  localStorage.removeItem("JWT_Token")
  dispatch(logout())
}

export const signupThunk = (email, password, username) => async dispatch => {
  const userdata = {email, password, username}
  console.log(userdata)
  fetch("https://ca.xccelerate.co/auth/signup", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userdata),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Success: ", data)
    })
}

// Remember to export your actions and your thunk actions ot be used in your components.
export default authSlice.reducer
