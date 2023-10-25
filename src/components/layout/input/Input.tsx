import React, { FC } from 'react'
import classes from './Input.module.css'

interface InputProps {
  type: string
  name: string
  placeholder: string
  value?: string
}

const Input: FC<InputProps> = ({ type, name, placeholder, value }) => {
  return (
    <input
      className={classes.modalInput}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value ? value : ''}
    />
  )
}

export default Input
