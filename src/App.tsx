import React, { FC } from 'react'
import AppRoutes from './routes/Routes'
import 'dayjs/locale/ru' // load on demand
import dayjs from 'dayjs'

dayjs.locale('ru')

const App: FC = () => {
  return <AppRoutes />
}

export default App
