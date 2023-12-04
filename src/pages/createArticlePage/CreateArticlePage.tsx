import React, { FC } from 'react'
import MainMenu from '../../components/mainMenu/MainMenu'
import ButtonBack from '../../components/layout/buttons/buttonBack/ButtonBack'
import ArticleAddForm from '../../components/article/ArticleAddForm/ArticleAddForm'
const CreateArticlePage: FC = () => {
  return (
    <main>
      <MainMenu />
      <div style={{ marginTop: '30px', padding: '20px', position: 'relative' }}>
        <ButtonBack />
        <ArticleAddForm />
      </div>
    </main>
  )
}

export default CreateArticlePage
