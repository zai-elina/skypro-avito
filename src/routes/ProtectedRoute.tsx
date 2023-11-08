import React, { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute: FC = () => {
  const authUser = localStorage.getItem('access_token')
  if (!authUser) {
    return <Navigate to={'/'} replace={true} />
  }

  return <Outlet />
}
