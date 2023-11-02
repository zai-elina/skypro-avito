import React, { FC } from 'react'
import classes from './CardsSection.module.css'
import SkeletonCard from './card/SkeletonCard'
import { nanoid } from '@reduxjs/toolkit'

const SkeletonCardsSection: FC<{ title: string }> = ({ title }) => {
  return (
    <section className={classes.mainContainer}>
      <h2>{title}</h2>
      <div className={classes.cardsContent}>
        <div className={classes.cards}>
          {Array(8)
            .fill('')
            .map(() => {
              const id = nanoid()
              return <SkeletonCard key={id} />
            })}
        </div>
      </div>
    </section>
  )
}

export default SkeletonCardsSection
