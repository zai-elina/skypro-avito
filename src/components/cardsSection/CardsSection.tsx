import React, { FC, useEffect } from 'react'
import classes from './CardsSection.module.css'
import Card from './card/Card'
import { useGetArticleListDataQuery } from '../../store/services/api'
import { useAppDispatch } from '../../store/reduxHook'
import { setArticleList } from '../../store/slices/articlesSlice'
import { IArticle } from '../../types'

const CardsSection: FC<{ title: string }> = ({ title }) => {
  const { data, isLoading, error } = useGetArticleListDataQuery({})
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!error && !isLoading) {
      dispatch(setArticleList(data))
    }
  }, [data, isLoading, error, dispatch])

  return (
    <section className={classes.mainContainer}>
      <h2>{title}</h2>
      <div className={classes.cardsContent}>
        {!isLoading && (
          <div className={classes.cards}>
            {data.map((article: IArticle) => (
              <Card key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default CardsSection
