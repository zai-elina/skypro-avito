import React, { FC } from 'react'
import classes from './Button.module.css'

interface IButtonProps {
  style?: React.CSSProperties
  onClick: () => void
}

const Button: FC<IButtonProps> = ({ style, onClick }) => {
  return (
    <button
      className={classes.btn}
      id="btnMainEnter"
      style={style}
      onClick={onClick}
    >
      Вход в личный кабинет
    </button>
  )
}

export default Button
