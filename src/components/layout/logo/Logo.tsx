import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Logo.module.css'
import { useMediaQuery } from 'react-responsive'
import logo from '../../../assets/img/logo.png'
import logoMob from '../../../assets/img/logo-mob.png'

const Logo = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 620px)',
  })
  return (
    <Link to="/">
      {isMobile ? (
        <img className={classes.logoMob} src={logoMob} alt="logo" />
      ) : (
        <img className={classes.logo} src={logo} alt="logo" />
      )}
    </Link>
  )
}

export default Logo
