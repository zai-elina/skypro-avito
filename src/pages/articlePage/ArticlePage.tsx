import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import MainMenu from '../../components/mainMenu/MainMenu'
import classes from './ArticlePage.module.css'
import Article from '../../components/article/Article'
import ArticleDesc from '../../components/article/ArticleDesc/ArticleDesc'

const ArticlePage: FC = () => {
  const { id } = useParams()
  return (
    <main>
      <div className={classes.mainContainer}>
        <div className={classes.mainCenterBlock}>
          <MainMenu />
          <div className={classes.mainArticle}>
            <Article />
          </div>

          <div className={classes.mainContainer}>
            <ArticleDesc />
          </div>
        </div>
      </div>
    </main>
  )
}

export default ArticlePage
