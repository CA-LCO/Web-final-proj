import { useState, useEffect } from 'react'

export default function Timer (props) {
  const [elapsed, setElapsed] = useState(0)
  let startTime
  let timer = {}

  const tick = () => {
    setElapsed(Date.now() - startTime)
  }

  // acts as all lifecycle methods, component did mount, component did update and componentwillunmount.
  useEffect(() => {
    startTime = Date.now()
    timer = setInterval(tick, 1)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      <p>Time Elapsed: {(elapsed / 1000).toFixed(3)}s</p>
    </>
  )
}
