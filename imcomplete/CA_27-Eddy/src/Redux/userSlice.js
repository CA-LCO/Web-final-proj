// Create a userSlicer here
// The user slice, should have no users initally
// When we load the userList component we need to fire off a thunk action to retrieve the users from https://ca.xccelerate.co/auth/users

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: []
};

export const userSlice = createSlice({
  name: "usersInfo",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    },
  }
})

export const {setUsers} = userSlice.actions

// Create a getUsers function to alter the state of the reducer within the authSlice
// Create a thunk action that retrieves the JWT TOKEN from localStorage before sending the request
export const getUsersThunk = () => async dispatch => {
  const token = localStorage.getItem('JWT_Token')

  fetch("https://ca.xccelerate.co/auth/users", {
    method: "GET",
    crossDomain: true,
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  })
    .then(res => res.json())
    .then((data) => {
      dispatch(setUsers(data))
    })
}

// Remember to export your actions, thunk actions and reducer.
export default userSlice.reducer