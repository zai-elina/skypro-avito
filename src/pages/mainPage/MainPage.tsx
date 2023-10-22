import React, { FC } from 'react'
import Logo from '../../components/layout/logo/Logo'
import classes from './MainPage.module.css'
import SearchForm from '../../components/main/searchForm/SearchForm'
import CardsSection from '../../components/main/cardsSection/CardsSection'

const MainPage: FC = () => {
  return (
    <main>
      <div className={classes.mainSearch}>
        <Logo />
        <SearchForm />
      </div>
      <CardsSection />
    </main>
  )
}

export default MainPage
