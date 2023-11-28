import React, { FC, useState } from 'react'
import classes from './ArticleImg.module.css'
import { IImage } from '../../../types'
import { hostDomain } from '../../../constants'
import defaultImage from '../../../assets/img/box.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { useNavigate } from 'react-router-dom'

interface IAtricleImg {
  images: IImage[]
  title: string
}

const ArticleImg: FC<IAtricleImg> = ({ images, title }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const handleImageClick = (index: number) => {
    setActiveImageIndex(index)
  }

  const renderImages = () => {
    return images?.map((img, index) => (
      <div
        className={classes.articleImgBarItem}
        key={img.id}
        onClick={() => handleImageClick(index)}
      >
        <img src={`${hostDomain}/${img.url}`} alt="" />
      </div>
    ))
  }

  return (
    <div className={classes.articleImgContainer}>
      <div className={classes.articleImg}>
        {images && images.length !== 0 ? (
          <img
            src={`${hostDomain}/${images[activeImageIndex].url}`}
            alt={title}
            onClick={() => {
              if (activeImageIndex !== images.length - 1) {
                setActiveImageIndex((prev) => (prev += 1))
              } else {
                setActiveImageIndex(0)
              }
            }}
          />
        ) : (
          <img src={`${defaultImage}`} alt={title} />
        )}
      </div>
      <div className={classes.articleImgBar}>{renderImages()}</div>
      <div className={classes.articleImgBarMob}>
        <Carousel
          showStatus={false}
          showThumbs={false}
          selectedItem={activeImageIndex}
          infiniteLoop={true}
          onChange={(index) => setActiveImageIndex(index)}
        >
          {images?.map((img, index) => (
            <div
              className={classes.articleImgBarItem}
              key={img.id}
              onClick={() => handleImageClick(index)}
            >
              <img src={`${hostDomain}/${img.url}`} alt="" />
              <div className={classes.goBack} onClick={goBack}></div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default ArticleImg
