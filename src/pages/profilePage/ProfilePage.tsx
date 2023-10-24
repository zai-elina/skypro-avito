import React, { FC } from 'react'
import classes from './ProfilePage.module.css'
import MainMenu from '../../components/mainMenu/MainMenu'

const ProfilePage: FC = () => {
  return (
    <main>
      <div className={classes.mainContainer}>
        <div className={classes.mainCenterBlock}>
          <MainMenu />
        </div>
      </div>
    </main>
  )
}

export default ProfilePage
