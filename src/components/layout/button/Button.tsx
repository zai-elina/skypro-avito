import React, { FC } from 'react'
import classes from './Button.module.css'

interface IButtonProps {
  text: string
  style?: React.CSSProperties
  onClick: () => void
}

const Button: FC<IButtonProps> = ({ text, style, onClick }) => {
  return (
    <button
      className={classes.btn}
      id="btnMainEnter"
      style={style}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
