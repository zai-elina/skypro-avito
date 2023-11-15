import React, { FC } from 'react'
import classes from './CardsSection.module.css'
import Card from './card/Card'
import { IArticle } from '../../types'

interface ICardsSection {
  title: string
  cards: IArticle[]
}

const CardsSection: FC<ICardsSection> = ({ title, cards }) => {
  return (
    <section className={classes.mainContainer}>
      <h2>{title}</h2>
      <div className={classes.cardsContent}>
        <div className={classes.cards}>
          {cards?.map((article: IArticle) => (
            <Card key={article.id} article={article} />
          ))}
          {cards?.length === 0 && <>Ничего не найдено</>}
        </div>
      </div>
    </section>
  )
}

export default CardsSection
