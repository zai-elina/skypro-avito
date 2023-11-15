import React, { FC } from 'react'
import classes from './CloseButton.module.css'

interface ICloseButton {
  onClick: () => void
}

const CloseButton: FC<ICloseButton> = ({ onClick }) => {
  return (
    <div className={classes.modal__btn_close} onClick={onClick}>
      <div className={classes.modal__btn_close_line}></div>
    </div>
  )
}

export default CloseButton
