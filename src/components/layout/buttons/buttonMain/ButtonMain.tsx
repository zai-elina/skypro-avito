import React, { FC } from 'react'
import classes from './ButtonMain.module.css'

interface IButtonProps {
  type?: string
  text: string
  style?: React.CSSProperties
  onClick?: () => void
  disabled?: boolean
}

const ButtonMain: FC<IButtonProps> = ({ text, style, onClick, disabled }) => {
  return (
    <button
      className={classes.btn}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default ButtonMain
