import React, { FC, useEffect } from 'react'
import AppRoutes from './routes/Routes'
import 'dayjs/locale/ru' // load on demand
import dayjs from 'dayjs'
import { useAppDispatch } from './store/reduxHook'
import { setUser } from './store/slices/userSlice'

dayjs.locale('ru')

const App: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const authUser = localStorage.getItem('authUser')
    if (authUser) {
      dispatch(setUser(JSON.parse(authUser)))
    }
  })

  return <AppRoutes />
}

export default App
