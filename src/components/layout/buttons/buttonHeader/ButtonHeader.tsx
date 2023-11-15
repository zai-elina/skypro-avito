import React, { FC } from 'react'
import classes from './ButtonHeader.module.css'

interface IButtonProps {
  text: string
  style?: React.CSSProperties
  onClick: () => void
}

const ButtonHeader: FC<IButtonProps> = ({ text, style, onClick }) => {
  return (
    <button className={classes.btn} style={style} onClick={onClick}>
      {text}
    </button>
  )
}

export default ButtonHeader
