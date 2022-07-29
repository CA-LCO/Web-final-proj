import { useSelector, useDispatch } from 'react-redux'
import {
  incrementCountInOneSecond,
  decrementCountInOneSecond
} from '../Redux/thunkSlice'

import { useState } from 'react'
import Timer from './Timer'

export default function ThunkCounter () {
  const count = useSelector(state => state.thunkStore.count)
  const dispatch = useDispatch()

  let [showTimer, setShowTimer] = useState(false)

  return (
    <div>
      <h1>Thunk Counter - takes 1 second to update!</h1>
      <h4>Current Count: {count}</h4>
      <button
        className='btn btn-success'
        onClick={() => {
          setShowTimer(true)
          dispatch(incrementCountInOneSecond())
          setTimeout(() => {
            setShowTimer(false)
          }, 1500)
        }}
      >
        +
      </button>
      <button
        className='btn btn-danger'
        onClick={() => {
          setShowTimer(true)
          dispatch(decrementCountInOneSecond())
          setTimeout(() => {
            setShowTimer(false)
          }, 1500)
        }}
      >
        -
      </button>
      {showTimer ? <Timer /> : <p>Time Elapsed: 0.000s</p>}
    </div>
  )
}
