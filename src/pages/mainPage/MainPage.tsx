import React, { FC, useEffect } from 'react'
import Logo from '../../components/layout/logo/Logo'
import classes from './MainPage.module.css'
import SearchForm from '../../components/searchForm/SearchForm'
import CardsSection from '../../components/cardsSection/CardsSection'
import { useGetArticleListDataQuery } from '../../store/services/api'
import { useAppDispatch } from '../../store/reduxHook'
import {
  changeSearchResultArticleList,
  setArticleList,
} from '../../store/slices/articlesSlice'
import Skeleton from 'react-loading-skeleton'
import SkeletonCardsSection from '../../components/cardsSection/SkeletonCardsSection'

const MainPage: FC = () => {
  const { data, isLoading, error } = useGetArticleListDataQuery({})
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!error && !isLoading) {
      dispatch(setArticleList(data))
      dispatch(changeSearchResultArticleList(data))
    }
  }, [data, isLoading, error, dispatch])

  return (
    <main>
      <div className={classes.mainSearch}>
        <Logo />
        <SearchForm />
      </div>
      {isLoading ? (
        <SkeletonCardsSection title={'Объявления'} />
      ) : (
        <CardsSection title="Объявления" />
      )}
    </main>
  )
}

export default MainPage
