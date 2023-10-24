import React, { FC } from 'react'
import Logo from '../../components/layout/logo/Logo'
import classes from './ProfilePage.module.css'

const ProfilePage: FC = () => {
  return (
    <main>
      <div className={classes.mainContainer}>
        <div className={classes.mainCenterBlock}>
          <Logo />
        </div>
      </div>
    </main>
  )
}

export default ProfilePage
