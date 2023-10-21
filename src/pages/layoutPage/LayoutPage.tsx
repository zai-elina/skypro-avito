import React, { FC } from 'react'
import classes from './LayoutPage.module.css'
import Header from '../../components/layout/header/Header'

const LayoutPage: FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Header />
      </div>
    </div>
  )
}

export default LayoutPage
