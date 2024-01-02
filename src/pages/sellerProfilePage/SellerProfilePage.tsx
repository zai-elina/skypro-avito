import React, { FC, useState, useEffect } from 'react'
import classes from './SellerProfilePage.module.css'
import MainMenu from '../../components/mainMenu/MainMenu'
import CardsSection from '../../components/cardsSection/CardsSection'
import ProfileInfo from '../../components/prifileInfo/ProfileInfo'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../store/reduxHook'
import { selectArtticleList } from '../../store/selectors/articleSelectors'
import { IArticle } from '../../types'
import ButtonBack from '../../components/layout/buttons/buttonBack/ButtonBack'

const SellerProfilePage: FC = () => {
  const { id } = useParams()
  const articles = useAppSelector(selectArtticleList)
  const [sellerArticle, setSellerArticle] = useState<IArticle[]>([])

  useEffect(() => {
    if (id) {
      setSellerArticle(articles.filter(({ user }) => user.id === +id))
    }
  }, [articles, id])

  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [])

  return (
    <main>
      <div className={classes.mainContainer}>
        <div className={classes.mainCenterBlock}>
          <MainMenu />
          <div style={{ position: 'relative' }}>
            <ButtonBack />
            <h2 className={classes.title}>Профиль продавца</h2>
          </div>
        </div>
        <ProfileInfo />
        <CardsSection title="Товары продавца" cards={sellerArticle} />
      </div>
    </main>
  )
}

export default SellerProfilePage
