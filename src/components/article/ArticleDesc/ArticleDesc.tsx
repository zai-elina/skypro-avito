import React, { FC } from 'react'
import classes from './ArticleDesc.module.css'

const ArticleDesc: FC = () => {
  return (
    <div>
      <h3 className={classes.title}>Описание товара</h3>
      <div className={classes.content}>
        <p className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  )
}

export default ArticleDesc
