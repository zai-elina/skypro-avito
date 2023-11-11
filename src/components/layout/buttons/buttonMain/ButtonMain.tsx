import React, { FC } from 'react'
import classes from './ButtonMain.module.css'

interface IButtonProps {
  text: string
  style?: React.CSSProperties
  onClick?: () => void
}

const ButtonMain: FC<IButtonProps> = ({ text, style, onClick }) => {
  return (
    <button className={classes.btn} style={style} onClick={onClick}>
      {text}
    </button>
  )
}

export default ButtonMain
