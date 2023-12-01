import React, { FC } from 'react'
import classes from './Footer.module.css'
import { Link } from 'react-router-dom'
import home from '../../../assets/img/icon_01.png'
import add from '../../../assets/img/icon_02.png'
import person from '../../../assets/img/icon_03.png'

const Footer: FC = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerContainer}>
        <div className={classes.footerImg}>
          <Link to="/">
            <img src={home} alt="home" />
          </Link>
        </div>
        <div className={classes.footerImg}>
          <Link to="/">
            <img src={add} alt="home" />
          </Link>
        </div>
        <div className={classes.footerImg}>
          <Link to="/login">
            <img src={person} alt="home" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
