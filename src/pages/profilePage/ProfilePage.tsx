import React, { FC } from 'react'
import classes from './ProfilePage.module.css'
import MainMenu from '../../components/mainMenu/MainMenu'
import CardsSection from '../../components/cardsSection/CardsSection'
import ProfileForm from '../../components/profileForm/ProfileForm'

const ProfilePage: FC = () => {
  const user = { name: 'Элина' }
  return (
    <main>
      <div className={classes.mainContainer}>
        <div className={classes.mainCenterBlock}>
          <MainMenu />
          <h2>Здравствуйте, {user.name}!</h2>
        </div>
        <ProfileForm />
        <CardsSection title="Мои товары" />
      </div>
    </main>
  )
}

export default ProfilePage
