import React, { FC } from 'react'
import classes from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer: FC = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerContainer}>
        <div className={classes.footerImg}>
          <Link to="/">
            <img src="img/icon_01.png" alt="home" />
          </Link>
        </div>
        <div className={classes.footerImg}>
          <Link to="/">
            <img src="img/icon_02.png" alt="home" />
          </Link>
        </div>
        <div className={classes.footerImg}>
          <Link to="/login">
            <img src="img/icon_03.png" alt="home" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
