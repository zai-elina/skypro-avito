import React, { FC } from 'react'
import classes from './Header.module.css'
import Button from '../button/Button'

const Header: FC = () => {
  const styleHeaderBtn = {
    width: '224px',
    height: '40px',
    border: '1px solid #ffffff',
  }
  return (
    <header className={classes.header}>
      <nav className={classes.headerNav}>
        <Button style={styleHeaderBtn} />
      </nav>
    </header>
  )
}

export default Header
