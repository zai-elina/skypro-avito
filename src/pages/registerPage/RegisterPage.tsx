import React, { FC } from 'react'
import Input from '../../components/layout/input/Input'
import classes from './Register.module.css'

const RegisterPage: FC = () => {
  const formInputs = [
    { type: 'text', name: 'login', placeholder: 'email', id: 'loginReg' },
    {
      type: 'password',
      name: 'password',
      placeholder: 'Пароль',
      id: 'passwordFirst',
    },
    {
      type: 'password',
      name: 'password',
      id: 'passwordSecond',
      placeholder: 'Повторите пароль',
    },
    {
      type: 'text',
      name: 'first-name',
      id: 'first-name',
      placeholder: 'Имя (необязательно)',
    },
    {
      type: 'text',
      name: 'first-last',
      id: 'first-last',
      placeholder: 'Фамилия (необязательно)',
    },
    {
      type: 'text',
      name: 'city',
      id: 'city',
      placeholder: 'Город (необязательно)',
    },
  ]
  return (
    <div className={classes.wrapper}>
      <div className={classes.containerSignup}>
        <div className={classes.modalBlock}>
          <form className={classes.modalFormLogin} id="formLogUp" action="#">
            <div className={classes.modalLogo}>
              <img src="./img/logo_modal.png" alt="logo" />
            </div>
            {formInputs.map((input) => {
              const { type, name, id, placeholder } = input
              return (
                <Input
                  key={id}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                />
              )
            })}
            <button className={classes.modalBtnSignupEnt} id="SignUpEnter">
              <a href="#">Зарегистрироваться</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
