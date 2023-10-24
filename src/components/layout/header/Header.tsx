import React, { FC } from 'react'
import classes from './Header.module.css'
import Button from '../button/Button'
import { useNavigate } from 'react-router-dom'

const Header: FC = () => {
  const styleHeaderBtn = {
    width: '224px',
    height: '40px',
    border: '1px solid #ffffff',
  }
  const navigate = useNavigate()
  const openLoginForm = () => {
    navigate('/login')
  }
  return (
    <header className={classes.header}>
      <nav className={classes.headerNav}>
        <Button style={styleHeaderBtn} onClick={openLoginForm} />
      </nav>
    </header>
  )
}

export default Header
