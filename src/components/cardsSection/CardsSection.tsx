import React, { FC } from 'react'
import classes from './CardsSection.module.css'
import Card from './card/Card'
import { useAppSelector } from '../../store/reduxHook'
import { IArticle } from '../../types'
import { selectArtticleList } from '../../store/selectors/articleSelectors'

const CardsSection: FC<{ title: string }> = ({ title }) => {
  const articleList = useAppSelector(selectArtticleList)

  return (
    <section className={classes.mainContainer}>
      <h2>{title}</h2>
      <div className={classes.cardsContent}>
        <div className={classes.cards}>
          {articleList?.map((article: IArticle) => (
            <Card key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CardsSection
