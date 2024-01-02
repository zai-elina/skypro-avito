import React, { FC, useEffect, useState } from 'react'
import classes from './Footer.module.css'
import { Link } from 'react-router-dom'
import home from '../../../assets/img/icon_01.png'
import add from '../../../assets/img/icon_02.png'
import person from '../../../assets/img/icon_03.png'
import { useAppSelector } from '../../../store/reduxHook'
import { selectUserToken } from '../../../store/selectors/userSelector'

const Footer: FC = () => {
  const userToken = useAppSelector(selectUserToken)
  const [authUser, setAuthUser] = useState(userToken)
  console.log(userToken);

  useEffect(() => {
    setAuthUser(userToken)
  }, [userToken])

  const getLinkTo = () => {
    if (authUser) {
      return '/profile'
    }
    return '/login'
  }

  return (
    <div className={classes.footer}>
      <div className={classes.footerContainer}>
        <div className={classes.footerImg}>
          <Link to="/">
            <img src={home} alt="Главная" />
          </Link>
        </div>
        {authUser && (
          <div className={classes.footerImg}>
            <Link to="/article/creation">
              <img src={add} alt="Добавить объявление" />
            </Link>
          </div>
        )}
        <div className={classes.footerImg}>
          <Link to={getLinkTo()}>
            <img src={person} alt="Личный кабинет" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
