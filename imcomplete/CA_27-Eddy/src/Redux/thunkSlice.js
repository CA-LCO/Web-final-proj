import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0
}

export const thunkSlice = createSlice({
  name: 'thunk',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count = state.count + 1
    },
    decrement: (state, action) => {
      state.count = state.count - 1
    }
  }
})

export const { increment, decrement } = thunkSlice.actions

export const incrementCountInOneSecond = () => async dispatch => {
  setTimeout(() => {
    dispatch(increment())
  }, 1000)
}

export const decrementCountInOneSecond = () => async dispatch => {
  setTimeout(() => {
    dispatch(decrement())
  }, 1000)
}

export default thunkSlice.reducer
