import React, { FC } from 'react'
import classes from './Header.module.css'
import ButtonHeader from '../buttons/buttonHeader/ButtonHeader'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../store/reduxHook'
import { openAddModal } from '../../../store/slices/articlesSlice'
import { logOutUser } from '../../../store/slices/userSlice'

const Header: FC = () => {
  const isAuth = Boolean(localStorage.getItem('access_token'))
  const styleHeaderBtn = {
    width: '224px',
    height: '40px',
    border: '1px solid #ffffff',
  }
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const openLoginForm = () => {
    navigate('/login')
  }

  const openProfile = () => {
    navigate('/profile')
  }

  const onClickOpenAddModal = () => {
    dispatch(openAddModal(true))
  }

  const logOut = () => {
    localStorage.clear()
    dispatch(logOutUser({}))
    navigate('/')
  }

  return (
    <header className={classes.header}>
      <nav className={classes.headerNav}>
        {isAuth ? (
          <div style={{ display: 'flex', columnGap: '10px' }}>
            <ButtonHeader
              text="Разместить объявление"
              style={styleHeaderBtn}
              onClick={onClickOpenAddModal}
            />
            <ButtonHeader
              text="Личный кабинет"
              style={styleHeaderBtn}
              onClick={openProfile}
            />
            <div className={classes.logOut} onClick={logOut}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: '10px' }}
              >
                <path
                  d="M25.6711 16.046V14.7419C25.6711 13.2276 24.4435 12 22.9292 12H16.7419C15.2276 12 14 13.2276 14 14.7419V26.0645C14 27.5788 15.2276 28.8065 16.7419 28.8065H22.9292C24.4435 28.8065 25.6711 27.5788 25.6711 26.0645V24.6048M18.3572 20.3254H33.2963M33.2963 20.3254L30.1062 23.5155M33.2963 20.3254L30.1062 17.1353"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="20" cy="20" r="19.5" stroke="white" />
              </svg>
            </div>
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
