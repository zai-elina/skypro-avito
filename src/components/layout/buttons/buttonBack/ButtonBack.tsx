import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './ButtonBack.module.css'

const ButtonBack: FC = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }
  return <div className={classes.goBack} onClick={goBack}></div>
}

export default ButtonBack
