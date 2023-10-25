import React, { FC } from 'react'
import Logo from '../../components/layout/logo/Logo'
import classes from './MainPage.module.css'
import SearchForm from '../../components/searchForm/SearchForm'
import CardsSection from '../../components/cardsSection/CardsSection'

const MainPage: FC = () => {
  return (
    <main>
      <div className={classes.mainSearch}>
        <Logo />
        <SearchForm />
      </div>
      <CardsSection title="Объявления" />
    </main>
  )
}

export default MainPage
