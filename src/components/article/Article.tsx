import React, { FC, useEffect, useState } from 'react'
import ButtonMain from '../layout/buttons/buttonMain/ButtonMain'
import { Link } from 'react-router-dom'
import classes from './Article.module.css'
import { useAppDispatch, useAppSelector } from '../../store/reduxHook'
import { selectSelectedArtile } from '../../store/selectors/articleSelectors'
import dayjs from 'dayjs'
import { hostDomain } from '../../constants'
import { changeSellerOfSelectedArticle } from '../../store/slices/articlesSlice'
import { maskString } from '../../utils/maskPhone'

const Article: FC = () => {
  const article = useAppSelector(selectSelectedArtile)
  const { title, price, user, created_on, images } = article
  const dispatch = useAppDispatch()
  const [phoneIsOpen, setPhoneIsOpen] = useState(false)

  useEffect(() => {
    dispatch(changeSellerOfSelectedArticle(user))
  }, [dispatch, user])

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
            text={`Показать телефон\n${
              phoneIsOpen
                ? user?.phone
                : maskString(user?.phone ? user.phone : '')
            }`}
            onClick={() => {
              setPhoneIsOpen(!phoneIsOpen)
            }}
            style={{
              whiteSpace: 'pre-line',
              width: '214px',
              height: '62px',
              marginLeft: '0',
            }}
          />
          <Link to={`/user/${user?.id}`}>
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
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Article
