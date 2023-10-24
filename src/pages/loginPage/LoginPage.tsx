import React, { FC } from 'react'
import classes from './LoginPage.module.css'
import Input from '../../components/layout/input/Input'
import { Link } from 'react-router-dom'

const LoginPage: FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.containerEnter}>
        <div className={classes.modalBlock}>
          <form className={classes.modalFormLogin} id="formLogIn" action="#">
            <div className={classes.modalLogo}>
              <img src="./img/logo_modal.png" alt="logo" />
            </div>
            <Input type="text" name="login" placeholder="email" />
            <Input type="password" name="password" placeholder="Пароль" />
            <button className={classes.modalBtnEnter} id="btnEnter">
              <a href="#">Войти</a>
            </button>
            <button className={classes.modalBtnSignup} id="btnSignUp">
              <Link to="/register">Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
