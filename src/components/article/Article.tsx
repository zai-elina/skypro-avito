import React, { FC } from 'react'
import ButtonMain from '../layout/buttons/buttonMain/ButtonMain'
import { Link } from 'react-router-dom'
import classes from './Article.module.css'

const Article: FC = () => {
  return (
    <div className={classes.article}>
      <div className={classes.articleLeft}>
        <div className={classes.articleImgContainer}>
          <div className={classes.articleImg}>
            <img src="" alt="" />
          </div>
          <div className={classes.articleImgBar}>
            {Array(6)
              .fill('')
              .map((item, index) => (
                <div className={classes.articleImgBarItem} key={index}>
                  <img src="" alt="" />
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
          <h3 className={classes.acrticleTitle}>
            Ракетка для большого тенниса Triumph Pro STС Б/У
          </h3>
          <div>
            <p className={classes.articleTextInfo}>Сегодня в 10:45</p>
            <p className={classes.articleTextInfo}>Санкт-Петербург</p>
            <Link to="/">23 отзыва</Link>
          </div>
          <p className={classes.articlePrice}>2 200 ₽</p>
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
              <img src="" alt="" />
            </div>
            <div style={{ marginLeft: '12px' }}>
              <p className={classes.authorName}>Кирилл</p>
              <p className={classes.articleTextInfo}>
                Продает товары с августа 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
