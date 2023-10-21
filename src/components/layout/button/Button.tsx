import React, { FC } from 'react'
import classes from './Button.module.css'

interface IButtonProps {
  style: React.CSSProperties
}

const Button: FC<IButtonProps> = ({ style }) => {
  return (
    <button className={classes.btn} id="btnMainEnter" style={style}>
      Вход в личный кабинет
    </button>
  )
}

export default Button
