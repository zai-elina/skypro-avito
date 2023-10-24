import React, { FC } from 'react'
import Logo from '../layout/logo/Logo'
import classes from './MainMenu.module.css'
import { useNavigate } from 'react-router-dom'
import ButtonMain from '../layout/buttons/buttonMain/ButtonMain'
import { useMediaQuery } from 'react-responsive'

const MainMenu: FC = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 620px)',
  })
  const navigate = useNavigate()
  const onClick = () => {
    navigate('/')
  }
  return (
    <div className={classes.mainMenu}>
      <Logo />
      {!isMobile && (
        <ButtonMain
          onClick={onClick}
          text="Вернуться на главную"
          style={{ width: '241px', marginLeft: '60px' }}
        />
      )}
    </div>
  )
}

export default MainMenu
