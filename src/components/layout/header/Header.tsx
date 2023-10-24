import React, { FC } from 'react'
import classes from './Header.module.css'
import Button from '../button/Button'
import { useNavigate } from 'react-router-dom'

const Header: FC = () => {
  const isAuth = true
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
            <Button
              text="Разместить объявление"
              style={styleHeaderBtn}
              onClick={() => console.log('add')}
            />
            <Button
              text="Личный кабинет"
              style={styleHeaderBtn}
              onClick={openProfile}
            />
          </div>
        ) : (
          <Button
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
