import React, { FC } from 'react'
import Reviews from '../../components/reviews/Reviews'
import MainMenu from '../../components/mainMenu/MainMenu'
import ButtonBack from '../../components/layout/buttons/buttonBack/ButtonBack'

const ReviewsPage: FC = () => {
  return (
    <main>
      <MainMenu />
      <div style={{ marginTop: '30px', padding: '20px', position: 'relative' }}>
        <ButtonBack />
        <Reviews />
      </div>
    </main>
  )
}

export default ReviewsPage
