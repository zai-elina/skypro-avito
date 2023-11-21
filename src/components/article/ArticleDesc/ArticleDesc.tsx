import React, { FC } from 'react'
import classes from './ArticleDesc.module.css'
import { useAppSelector } from '../../../store/reduxHook'
import { selectSelectedArtile } from '../../../store/selectors/articleSelectors'

const ArticleDesc: FC = () => {
  const article = useAppSelector(selectSelectedArtile)
  return (
    <div className={classes.descContainer}>
      <h3 className={classes.title}>Описание товара</h3>
      <div className={classes.content}>
        <p className={classes.text}>{article.description}</p>
      </div>
    </div>
  )
}

export default ArticleDesc
