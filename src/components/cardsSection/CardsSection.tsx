import React from 'react'
import classes from './CardsSection.module.css'
import Card from './card/Card'

const CardsSection = () => {
  return (
    <section className={classes.mainContainer}>
      <h2 className={classes.mainTitle}>Объявления</h2>
      <div className={classes.cardsContent}>
        <div className={classes.cards}>
          {Array(6)
            .fill('')
            .map((item, index) => (
              <Card key={index} />
            ))}
        </div>
      </div>
    </section>
  )
}

export default CardsSection
