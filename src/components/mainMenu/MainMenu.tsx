import React, { FC } from 'react'
import Logo from '../layout/logo/Logo'
import classes from './MainMenu.module.css'
import { useNavigate } from 'react-router-dom'
import ButtonMain from '../layout/buttons/buttonMain/ButtonMain'
import { useMediaQuery } from 'react-responsive'
import { logOutUser } from '../../store/slices/userSlice'
import { useAppDispatch } from '../../store/reduxHook'

const MainMenu: FC = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 620px)',
  })
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const onClick = () => {
    navigate('/')
  }

  const logOut = () => {
    localStorage.clear()
    dispatch(logOutUser({}))
    navigate('/')
  }
  return (
    <div className={classes.mainMenu}>
      <Logo />
      {!isMobile ? (
        <ButtonMain
          onClick={onClick}
          text="Вернуться на главную"
          style={{ width: '241px', marginLeft: '60px' }}
        />
      ) : (
        <div className={classes.logOut} onClick={logOut}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
      )}
    </div>
  )
}

export default MainMenu
