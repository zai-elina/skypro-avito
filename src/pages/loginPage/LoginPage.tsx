import React, { FC, useEffect } from 'react'
import classes from './LoginPage.module.css'
import Input from '../../components/layout/input/Input'
import { Link, useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IFormFieldsRegister } from '../../types'
import { useLoginUserMutation } from '../../store/services/user.api'
import { nanoid } from '@reduxjs/toolkit'
import { useAppDispatch, useAppSelector } from '../../store/reduxHook'
import { selectLoginError } from '../../store/selectors/userSelector'
import Footer from '../../components/layout/footer/Footer'
import { setUserToken } from '../../store/slices/userSlice'

const formInputsLogin = [
  {
    type: 'text',
    name: 'email',
    placeholder: 'email',
    id: 'loginReg',
    rules: {
      required: 'Почта обязательное поле',
      pattern: {
        value:
          /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
        message: 'Почта не валидна',
      },
    },
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'Пароль',
    id: 'passwordFirst',
    rules: { required: 'Пароль обязательное поле' },
  },
]

const LoginPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormFieldsRegister>()
  const [loginUser, { data }] = useLoginUserMutation()
  const navigate = useNavigate()
  const error = useAppSelector(selectLoginError)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (data) {
      localStorage.setItem('access_token', data.access_token)
      localStorage.setItem('refresh_token', data.refresh_token)
      dispatch(setUserToken(data.access_token))
      navigate('/')
    }
  }, [data, dispatch, navigate])

  useEffect(() => {
    if (error && error?.data) {
      let text = error.data.detail
      if (text === 'Incorrect email') {
        text = 'Неправильная почта'
      } else if (text === 'Incorrect password') {
        text = 'Неправильная пароль'
      }
      alert(text)
    }
  }, [error])

  const onSubmit: SubmitHandler<IFormFieldsRegister> = async (data) => {
    await loginUser(data)
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.containerEnter}>
        <div className={classes.modalBlock}>
          <form
            className={classes.modalFormLogin}
            name="formLogIn"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={classes.modalLogo}>
              <img src="./img/logo_modal.png" alt="logo" />
            </div>
            {formInputsLogin.map((input) => {
              const { type, name, placeholder, rules } = input
              const id = nanoid()
              return (
                <div key={id} style={{ width: '100%', position: 'relative' }}>
                  <Input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    register={register}
                    rules={rules}
                  />
                  {errors[name as keyof IFormFieldsRegister] && (
                    <p
                      style={{
                        color: 'red',
                        position: 'absolute',
                        bottom: '-20px',
                      }}
                    >
                      {errors[name as keyof IFormFieldsRegister]?.message}
                    </p>
                  )}
                </div>
              )
            })}
            <button className={classes.modalBtnEnter} type="submit">
              <div>Войти</div>
            </button>
            <button className={classes.modalBtnSignup} id="btnSignUp">
              <Link to="/register">Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LoginPage
