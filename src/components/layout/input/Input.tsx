import React, { FC } from 'react'
import classes from './Input.module.css'

interface InputProps {
  type: string
  name: string
  placeholder: string
}

const Input: FC<InputProps> = ({ type, name, placeholder }) => {
  return (
    <input
      className={classes.modalInput}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  )
}

export default Input
