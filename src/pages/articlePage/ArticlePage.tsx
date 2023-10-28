import React from 'react'
import { useParams } from 'react-router-dom'
import MainMenu from '../../components/mainMenu/MainMenu'
import classes from './ArticlePage.module.css'

const ArticlePage = () => {
  const { id } = useParams()
  return (
    <main>
      <div className={classes.mainContainer}>
        <div className={classes.mainCenterBlock}>
          <MainMenu />
        </div>
      </div>
    </main>
  )
}

export default ArticlePage
