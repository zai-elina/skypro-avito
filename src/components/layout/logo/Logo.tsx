import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Logo.module.css'
import { useMediaQuery } from 'react-responsive'

const Logo = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 590px)',
  })
  return (
    <Link to="/">
      {isMobile ? (
        <img className={classes.logoMob} src="./img/logo-mob.png" alt="logo" />
      ) : (
        <img className={classes.logo} src="./img/logo.png" alt="logo" />
      )}
    </Link>
  )
}

export default Logo
