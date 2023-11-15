import React, { FC, ReactNode } from 'react'
import classes from './Modal.module.css'

interface IModal {
  active: boolean
  closeModal: () => void
  children: ReactNode
}

const Modal: FC<IModal> = ({ active, closeModal, children }) => {
  return (
    <div
      className={active ? `${classes.modal} ${classes.active}` : classes.modal}
      onClick={() => closeModal()}
    >
      <div
        className={
          active
            ? `${classes.modalContent} ${classes.active}`
            : classes.modalContent
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
