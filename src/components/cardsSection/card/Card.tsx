import React, { FC } from 'react'
import classes from './Card.module.css'
import { Link } from 'react-router-dom'
import { IArticle } from '../../../types'
import 'dayjs/locale/ru' // load on demand
import dayjs from 'dayjs'

dayjs.locale('ru')
interface IPropsCard {
  article: IArticle
}
const imageUrl = 'http://localhost:8090/'

const Card: FC<IPropsCard> = ({ article }) => {
  const { id, title, price, user, created_on, images } = article

  return (
    <div className={classes.cardContainer}>
      <div className={classes.card}>
        <div className={classes.cardImage}>
          <Link to={`/article/${id}`}>
            {images.length !== 0 && (
              <img src={`${imageUrl}${images[0].url}`} alt={title} />
            )}
            {title}
          </Link>
        </div>
        <div>
          <Link to={`/article/${id}`}>
            <h3 className={classes.cardTitle}>{title}</h3>
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
