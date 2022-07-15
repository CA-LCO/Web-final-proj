import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import shopreducer from '../features/shopSlice'

 const store = configureStore({
  reducer: {
  authStore: authReducer,
  shop: shopreducer,
  }
})

export default store

