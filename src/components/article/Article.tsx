import React, { FC } from 'react'
import ButtonMain from '../layout/buttons/buttonMain/ButtonMain'
import { Link } from 'react-router-dom'
import classes from './Article.module.css'
import { useAppSelector } from '../../store/reduxHook'
import { selectSelectedArtile } from '../../store/selectors/articleSelectors'
import dayjs from 'dayjs'
import { hostDomain } from '../../constants'

const Article: FC = () => {
  const article = useAppSelector(selectSelectedArtile)
  const { title, price, user, created_on, images } = article

  return (
    <div className={classes.article}>
      <div className={classes.articleLeft}>
        <div className={classes.articleImgContainer}>
          <div className={classes.articleImg}>
            {images && images.length !== 0 && (
              <img src={`${hostDomain}/${images[0].url}`} alt="" />
            )}
          </div>
          <div className={classes.articleImgBar}>
            {images?.map((img) => (
              <div className={classes.articleImgBarItem} key={img.id}>
                <img src={`${hostDomain}/${img.url}`} alt="" />
              </div>
            ))}
          </div>
          <div className={classes.articleImgBarMob}>
            {/* !!!подключить слайдер */}
            <div className="img-bar-mob__circle circle-active"></div>
            <div className="img-bar-mob__circle"></div>
            <div className="img-bar-mob__circle"></div>
            <div className="img-bar-mob__circle"></div>
            <div className="img-bar-mob__circle"></div>
          </div>
        </div>
      </div>
      <div className={classes.articleRight}>
        <div className={classes.articleВlock}>
          <h3 className={classes.acrticleTitle}>{title}</h3>
          <div>
            <p className={classes.articleTextInfo}>
              {dayjs(created_on).format('D MMMM, YYYY HH:mm')}
            </p>
            <p className={classes.articleTextInfo}>{user?.city}</p>
            <Link to="/">23 отзыва</Link>
          </div>
          <p className={classes.articlePrice}>{price}</p>
          <ButtonMain
            text={`Показать телефон\n8 9XX XXX XX XX`}
            onClick={() => console.log('number')}
            style={{
              whiteSpace: 'pre-line',
              width: '214px',
              height: '62px',
              marginLeft: '0',
            }}
          />
          <div className={classes.articleAuthor}>
            <div className={classes.articleAuthorImg}>
              <img src={`${hostDomain}/${user?.avatar}`} alt="" />
            </div>
            <div style={{ marginLeft: '12px' }}>
              <p className={classes.authorName}>{user?.name}</p>
              <p className={classes.articleTextInfo}>
                Продает товары {user?.sells_from}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
