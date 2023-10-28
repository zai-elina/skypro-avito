import React, { FC } from 'react'
import classes from './Card.module.css'
import { Link } from 'react-router-dom'

const Card: FC = () => {
  const id = 0
  return (
    <div className={classes.cardContainer}>
      <div className={classes.card}>
        <div className={classes.cardImage}>
          <Link to={`/article/${id}`}>
            <img src="#" alt="picture" />
          </Link>
        </div>
        <div>
          <Link to={`/article/${id}`}>
            <h3 className={classes.cardTitle}>
              Ракетка для большого тенниса Triumph Pro ST
            </h3>
          </Link>
          <p className={classes.cardPrice}>2&nbsp;200&nbsp;₽</p>
          <p className={classes.cardPlace}>Санкт Петербург</p>
          <p className={classes.cardDate}>Сегодня в&nbsp;10:45</p>
        </div>
      </div>
    </div>
  )
}

export default Card
