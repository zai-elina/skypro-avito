import React, { FC } from 'react'
import classes from './Header.module.css'
import ButtonHeader from '../buttons/buttonHeader/ButtonHeader'
import { useNavigate } from 'react-router-dom'

const Header: FC = () => {
  const isAuth = Boolean(localStorage.getItem('user'))
  const styleHeaderBtn = {
    width: '224px',
    height: '40px',
    border: '1px solid #ffffff',
  }
  const navigate = useNavigate()

  const openLoginForm = () => {
    navigate('/login')
  }

  const openProfile = () => {
    navigate('/profile')
  }

  return (
    <header className={classes.header}>
      <nav className={classes.headerNav}>
        {isAuth ? (
          <div style={{ display: 'flex', columnGap: '10px' }}>
            <ButtonHeader
              text="Разместить объявление"
              style={styleHeaderBtn}
              onClick={() => console.log('add')}
            />
            <ButtonHeader
              text="Личный кабинет"
              style={styleHeaderBtn}
              onClick={openProfile}
            />
          </div>
        ) : (
          <ButtonHeader
            text="Вход в личный кабинет"
            style={styleHeaderBtn}
            onClick={openLoginForm}
          />
        )}
      </nav>
    </header>
  )
}

export default Header
