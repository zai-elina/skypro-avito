import React, { FC } from 'react'
import classes from './ProfilePage.module.css'
import MainMenu from '../../components/mainMenu/MainMenu'
import CardsSection from '../../components/cardsSection/CardsSection'
import ProfileForm from '../../components/profileForm/ProfileForm'
import { useGetUserArticlesQuery } from '../../store/services/articleList.api'
import SkeletonCardsSection from '../../components/cardsSection/SkeletonCardsSection'

const ProfilePage: FC = () => {
  const user = { name: 'Элина' }
  const { data, isLoading } = useGetUserArticlesQuery({})

  return (
    <main>
      <div className={classes.mainContainer}>
        <div className={classes.mainCenterBlock}>
          <MainMenu />
          <h2>Здравствуйте, {user.name}!</h2>
        </div>
        <ProfileForm />
        {isLoading ? (
          <SkeletonCardsSection title={'Объявления'} />
        ) : (
          <CardsSection title="Мои товары" cards={data ? data : []} />
        )}
      </div>
    </main>
  )
}

export default ProfilePage
