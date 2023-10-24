import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import LayoutPage from '../pages/layoutPage/LayoutPage'
import MainPage from '../pages/mainPage/MainPage'
import LoginPage from '../pages/loginPage/LoginPage'
import RegisterPage from '../pages/registerPage/RegisterPage'

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route path="/" element={<MainPage />} />
        {/* <Route element={<ProtectedRoute />}></Route> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}

export default AppRoutes
