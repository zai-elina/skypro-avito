import React, { FC, useEffect } from 'react'
import Logo from '../../components/layout/logo/Logo'
import classes from './MainPage.module.css'
import SearchForm from '../../components/searchForm/SearchForm'
import CardsSection from '../../components/cardsSection/CardsSection'
import { useGetArticleListDataQuery } from '../../store/services/api'
import { useAppDispatch } from '../../store/reduxHook'
import { setArticleList } from '../../store/slices/articlesSlice'

const MainPage: FC = () => {
  const { data, isLoading, error } = useGetArticleListDataQuery({})
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!error && !isLoading) {
      dispatch(setArticleList(data))
    }
  }, [data, isLoading, error, dispatch])
  
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
