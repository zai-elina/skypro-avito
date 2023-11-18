import React, { FC, useState, useEffect } from 'react'
import Input from '../../components/layout/input/Input'
import classes from './Register.module.css'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IFormFieldsRegister } from '../../types'
import { nanoid } from '@reduxjs/toolkit'
import { useRegisterUserMutation } from '../../store/services/user.api'
import { useNavigate } from 'react-router-dom'

const formInputs = [
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
  {
    type: 'password',
    name: 'second_password',
    id: 'passwordSecond',
    placeholder: 'Повторите пароль',
    rules: { required: 'Пароль обязательное поле' },
  },
  {
    type: 'text',
    name: 'name',
    id: 'name',
    placeholder: 'Имя (необязательно)',
  },
  {
    type: 'text',
    name: 'surname',
    id: 'surname',
    placeholder: 'Фамилия (необязательно)',
  },
  {
    type: 'text',
    name: 'city',
    id: 'city',
    placeholder: 'Город (необязательно)',
  },
]

const RegisterPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormFieldsRegister>()
  const [passwordEqual, setPasswordEqual] = useState<string>('')
  const [registerUser, { data, error }] = useRegisterUserMutation()
  const navigate = useNavigate()

  useEffect(() => {
    if (data) {
      navigate('/login')
    }
  }, [data, navigate])

  useEffect(() => {
    if (error?.status === 400) {
      alert('Пользователь с данной почтой уже существует')
    }
  }, [error, navigate])

  const onSubmit: SubmitHandler<IFormFieldsRegister> = (data) => {
    if (data.password !== data.second_password) {
      setPasswordEqual('Пароли не совпадают')
      return
    }
    setPasswordEqual('')
    registerUser(data)
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.containerSignup}>
        <div className={classes.modalBlock}>
          <form
            className={classes.modalFormLogin}
            name="formLogUp"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={classes.modalLogo}>
              <img src="./img/logo_modal.png" alt="logo" />
            </div>
            {passwordEqual && <p style={{ color: 'red' }}>{passwordEqual}</p>}
            {formInputs.map((input) => {
              const { type, name, placeholder, rules } = input
              const id = nanoid()
              return (
                <div key={id} style={{ width: '100%', position: 'relative' }}>
                  <Input
                    key={id}
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
            <button className={classes.modalBtnSignupEnt} type="submit">
              <div>Зарегистрироваться</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
