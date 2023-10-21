import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import LayoutPage from '../pages/layoutPage/LayoutPage'

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        {/* <Route path="/" element={<MainPage />} /> */}
        {/* <Route element={<ProtectedRoute />}></Route> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  )
}

export default AppRoutes
