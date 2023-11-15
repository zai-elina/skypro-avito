import React, { FC, useEffect } from 'react'
import Logo from '../../components/layout/logo/Logo'
import classes from './MainPage.module.css'
import SearchForm from '../../components/searchForm/SearchForm'
import CardsSection from '../../components/cardsSection/CardsSection'
import { useGetArticleListDataQuery } from '../../store/services/api'
import { useAppDispatch, useAppSelector } from '../../store/reduxHook'
import {
  changeSearchResultArticleList,
  setArticleList,
} from '../../store/slices/articlesSlice'
import SkeletonCardsSection from '../../components/cardsSection/SkeletonCardsSection'
import { selectSearchArticleList } from '../../store/selectors/articleSelectors'

const MainPage: FC = () => {
  const { data, isLoading, error } = useGetArticleListDataQuery({})
  const dispatch = useAppDispatch()
  const articles = useAppSelector(selectSearchArticleList)

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
        <CardsSection title="Объявления" cards={articles} />
      )}
    </main>
  )
}

export default MainPage
