import React, { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute: FC = () => {
  const authUser = true
  if (!authUser) {
    return <Navigate to={'/'} replace={true} />
  }

  return <Outlet />
}
