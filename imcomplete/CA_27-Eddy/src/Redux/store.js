import { configureStore } from '@reduxjs/toolkit'
import linksReducer from './linksSlice'
// import the authReducer.
// import the userReducer
import userReducer from './userSlice'
import thunkCounterReducer from './thunkSlice'
import authReducer from './authSlice'
import logger from 'redux-logger'

// The confgiureStore function allows develops to utilise Redux Thunk and the Redux debugger straight off the bat
export const store = configureStore({
  reducer: {
    linksStore: linksReducer,
    // Add in the auth store
    // Add in the user store
    thunkStore: thunkCounterReducer,
    authStore: authReducer,
    userStore: userReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})
