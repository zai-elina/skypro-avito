import React, { FC, useState } from 'react'
import classes from './ArticleImg.module.css'
import { IImage } from '../../../types'
import { hostDomain } from '../../../constants'
import defaultImage from '../../../assets/img/box.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

interface IAtricleImg {
  images: IImage[]
  title: string
}

const ArticleImg: FC<IAtricleImg> = ({ images, title }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

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
          // renderArrowNext={(clickHandler, hasNext) => {
          //   return (
          //     hasNext && (
          //       <svg
          //         width="20"
          //         height="20"
          //         viewBox="0 0 20 20"
          //         fill="none"
          //         xmlns="http://www.w3.org/2000/svg"
          //         onClick={clickHandler}
          //       >
          //         <path
          //           d="M17.9687 9.45984L9.53565 2.14064C9.47091 2.08484 9.38832 2.05359 9.30127 2.05359H7.32582C7.16065 2.05359 7.08475 2.25895 7.20975 2.36609L15.0267 9.1518H1.96422C1.866 9.1518 1.78564 9.23216 1.78564 9.33037V10.6697C1.78564 10.7679 1.866 10.8482 1.96422 10.8482H15.0245L7.20752 17.6339C7.08252 17.7433 7.15841 17.9464 7.32359 17.9464H9.366C9.40841 17.9464 9.45082 17.9308 9.48207 17.9018L17.9687 10.5402C18.046 10.473 18.1079 10.39 18.1504 10.2968C18.1928 10.2036 18.2148 10.1024 18.2148 10C18.2148 9.89761 18.1928 9.7964 18.1504 9.70322C18.1079 9.61003 18.046 9.52703 17.9687 9.45984Z"
          //           fill="#3C79FF"
          //         />
          //       </svg>
          //     )
          //   )
          // }}
          // renderArrowPrev={(clickHandler, hasNext) => {
          //   return (
          //     hasNext && (
          //       <svg
          //         width="20"
          //         height="20"
          //         viewBox="0 0 20 20"
          //         fill="none"
          //         xmlns="http://www.w3.org/2000/svg"
          //         onClick={clickHandler}
          //       >
          //         <path
          //           d="M18.0357 9.1518H4.97548L12.7924 2.36609C12.9174 2.25671 12.8415 2.05359 12.6764 2.05359H10.7009C10.6139 2.05359 10.5313 2.08484 10.4665 2.14064L2.03128 9.45984C1.95402 9.52681 1.89206 9.6096 1.8496 9.70261C1.80713 9.79561 1.78516 9.89666 1.78516 9.9989C1.78516 10.1011 1.80713 10.2022 1.8496 10.2952C1.89206 10.3882 1.95402 10.471 2.03128 10.538L10.5157 17.9018C10.5491 17.9308 10.5893 17.9464 10.6317 17.9464H12.6741C12.8393 17.9464 12.9152 17.7411 12.7902 17.6339L4.97548 10.8482H18.0357C18.134 10.8482 18.2143 10.7679 18.2143 10.6697V9.33037C18.2143 9.23216 18.134 9.1518 18.0357 9.1518Z"
          //           fill="#3C79FF"
          //         />
          //       </svg>
          //     )
          //   )
          // }}
        >
          {images?.map((img, index) => (
            <div
              className={classes.articleImgBarItem}
              key={img.id}
              onClick={() => handleImageClick(index)}
            >
              <img src={`${hostDomain}/${img.url}`} alt="" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default ArticleImg
