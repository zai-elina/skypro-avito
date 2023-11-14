import React, { FC, useState } from 'react'
import classes from './ArticleImg.module.css'
import { IImage } from '../../../types'
import { hostDomain } from '../../../constants'

interface IAtricleImg {
  images: IImage[]
  title: string
}

const ArticleImg: FC<IAtricleImg> = ({ images, title }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  return (
    <div className={classes.articleImgContainer}>
      <div className={classes.articleImg}>
        {images && images.length !== 0 ? (
          <img
            src={`${hostDomain}/${images[activeImageIndex].url}`}
            alt={title}
          />
        ) : (
          <img src="../../img/box.jpg" alt={title} />
        )}
      </div>
      <div className={classes.articleImgBar}>
        {images?.map((img, index) => (
          <div
            className={classes.articleImgBarItem}
            key={img.id}
            onClick={() => setActiveImageIndex(index)}
          >
            <img src={`${hostDomain}/${img.url}`} alt="" />
          </div>
        ))}
      </div>
      {/* <div className={classes.articleImgBarMob}>
          // !!!подключить слайдер 
          <div className="img-bar-mob__circle circle-active"></div>
          <div className="img-bar-mob__circle"></div>
          <div className="img-bar-mob__circle"></div>
          <div className="img-bar-mob__circle"></div>
          <div className="img-bar-mob__circle"></div>
        </div> */}
    </div>
  )
}

export default ArticleImg
