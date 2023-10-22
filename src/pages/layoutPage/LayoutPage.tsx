import React, { FC } from 'react'
import classes from './LayoutPage.module.css'
import Header from '../../components/layout/header/Header'
import { Outlet } from 'react-router-dom'

const LayoutPage: FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutPage
