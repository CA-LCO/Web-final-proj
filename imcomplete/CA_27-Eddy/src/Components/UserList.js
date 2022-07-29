import { useSelector, useDispatch } from 'react-redux'
import { getUsersThunk } from '../Redux/userSlice'
import { useEffect } from 'react'

export default function UserList () {
  const users = useSelector(state => state.userStore.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsersThunk())
  }, [])

  return (
    <div>
      <h2>Current users</h2>
      {users && users.length > 0
        ? users.map((user, i) => (
            <div key={i}>
              {user.username} - {user.email}{' '}
            </div>
          ))
        : 'No users here'}
    </div>
  )
}
