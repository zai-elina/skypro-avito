import React, { FC, useEffect } from 'react'
import classes from './ProfilePage.module.css'
import MainMenu from '../../components/mainMenu/MainMenu'
import CardsSection from '../../components/cardsSection/CardsSection'
import ProfileForm from '../../components/profileForm/ProfileForm'
import { useGetUserArticlesQuery } from '../../store/services/articleList.api'
import SkeletonCardsSection from '../../components/cardsSection/SkeletonCardsSection'
import { useGetUserQuery } from '../../store/services/user.api'
import { useAppDispatch, useAppSelector } from '../../store/reduxHook'
import { setUser } from '../../store/slices/userSlice'
import { selectUser } from '../../store/selectors/userSelector'

const ProfilePage: FC = () => {
  const { data: user, isLoading: isUserLoading, isError } = useGetUserQuery({})
  const { data, isLoading } = useGetUserArticlesQuery({})
  const dispatch = useAppDispatch()
  const authUser = useAppSelector(selectUser)

  useEffect(() => {
    if (!isUserLoading && !isError) {
      dispatch(setUser(user))
      localStorage.setItem('authUser', JSON.stringify(user))
    }
  }, [dispatch, isError, isUserLoading, user])

  return (
    <main>
      <div className={classes.mainContainer}>
        <div className={classes.mainCenterBlock}>
          <MainMenu />
          <h2>Здравствуйте{authUser.name ? `, ${authUser.name}` : ''}!</h2>
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
