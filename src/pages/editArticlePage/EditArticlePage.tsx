import React, { FC } from 'react'
import MainMenu from '../../components/mainMenu/MainMenu'
import ButtonBack from '../../components/layout/buttons/buttonBack/ButtonBack'
import ArticleEditForm from '../../components/article/ArticleEditForm/ArticleEditForm'

const EditArticlePage: FC = () => {
  return (
    <main>
      <MainMenu />
      <div
        style={{
          marginTop: '30px',
          padding: '20px',
          position: 'relative',
          marginBottom: '54px',
        }}
      >
        <ButtonBack />
        <ArticleEditForm />
      </div>
    </main>
  )
}

export default EditArticlePage
