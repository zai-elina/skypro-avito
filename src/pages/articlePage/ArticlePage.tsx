import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MainMenu from '../../components/mainMenu/MainMenu'
import classes from './ArticlePage.module.css'
import Article from '../../components/article/Article'
import ArticleDesc from '../../components/article/ArticleDesc/ArticleDesc'
import {
  useGetArticleDataCommentsQuery,
  useGetArticleDataQuery,
} from '../../store/services/articleList.api'
import { useAppDispatch } from '../../store/reduxHook'
import {
  changeSelectedArticle,
  changeSelectedArticleComments,
} from '../../store/slices/articlesSlice'

const ArticlePage: FC = () => {
  const { id } = useParams()
  const { data, isLoading, error } = useGetArticleDataQuery(id ? +id : 0)
  const {
    data: comments,
    isLoading: isLoadingComments,
    error: errorComments,
  } = useGetArticleDataCommentsQuery(id ? +id : 0)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!error && !isLoading) {
      dispatch(changeSelectedArticle(data))
    }
  }, [data, dispatch, error, isLoading])

  useEffect(() => {
    if (!errorComments && !isLoadingComments) {
      dispatch(changeSelectedArticleComments(comments))
    }
  }, [comments, dispatch, errorComments, isLoadingComments])

  return (
    <main>
      <div className={classes.mainContainer}>
        <div className={classes.mainCenterBlock}>
          <MainMenu />
          <div className={classes.mainArticle}>
            {data && comments && <Article />}
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
