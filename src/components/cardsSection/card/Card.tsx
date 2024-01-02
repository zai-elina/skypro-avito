import React, { FC } from 'react'
import classes from './Card.module.css'
import { Link } from 'react-router-dom'
import { IArticle } from '../../../types'
import dayjs from 'dayjs'
import { hostDomain } from '../../../constants'
import defaultImage from '../../../assets/img/box.jpg'
interface IPropsCard {
  article: IArticle
}

const Card: FC<IPropsCard> = ({ article }) => {
  const { id, title, price, user, created_on, images } = article

  return (
    <div className={classes.cardContainer}>
      <div className={classes.card}>
        <div className={classes.cardImage}>
          <Link to={`/article/${id}`}>
            {images.length !== 0 ? (
              <img src={`${hostDomain}/${images[0].url}`} alt={title} />
            ) : (
              <img src={`${defaultImage}`} alt={title} />
            )}
          </Link>
        </div>
        <div className={classes.cardDesc}>
          <Link to={`/article/${id}`}>
            <div className={classes.cardTitle}>{title}</div>
          </Link>
          <p className={classes.cardPrice}>{price}₽</p>
          <p className={classes.cardPlace}>{user.city}</p>
          <p className={classes.cardDate}>
            {dayjs(created_on).format('MMMM D, YYYY HH:mm')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
