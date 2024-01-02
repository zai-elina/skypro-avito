import React, { FC } from 'react'
import classes from './Input.module.css'
import { UseFormRegister } from 'react-hook-form'
import { IFormFieldsRegister } from '../../../types'

interface InputProps {
  type: string
  name: string
  placeholder: string
  value?: string
  register: UseFormRegister<IFormFieldsRegister>
  rules?: { required?: string; pattern?: { value: RegExp; message: string } }
}

const Input: FC<InputProps> = ({
  type,
  name,
  placeholder,
  register,
  rules,
}) => {
  if (type === 'password') {
    return (
      <input
        className={classes.modalInput}
        type={type}
        placeholder={placeholder}
        {...register(name as keyof IFormFieldsRegister, rules)}
        autoComplete="on"
      />
    )
  }
  return (
    <input
      className={classes.modalInput}
      type={type}
      placeholder={placeholder}
      {...register(name as keyof IFormFieldsRegister, rules)}
    />
  )
}

export default Input
