import React, { FC, useEffect } from 'react'
import AppRoutes from './routes/Routes'
import 'dayjs/locale/ru' // load on demand
import dayjs from 'dayjs'
import { useAppDispatch } from './store/reduxHook'
import { setUser, setUserList } from './store/slices/userSlice'
import { useGetAllUsersQuery } from './store/services/user.api'

dayjs.locale('ru')

const App: FC = () => {
  const {
    data: user,
    isLoading: isUserLoading,
    error: userError,
  } = useGetAllUsersQuery({})
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!userError && !isUserLoading) {
      dispatch(setUserList(user))
    }
  }, [user, isUserLoading, userError, dispatch])

  useEffect(() => {
    const authUser = localStorage.getItem('authUser')
    if (authUser) {
      dispatch(setUser(JSON.parse(authUser)))
    }
  })

  return <AppRoutes />
}

export default App
