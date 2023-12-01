import React, { FC } from 'react'
import classes from './Card.module.css'
import ContentLoader from 'react-content-loader'
import { useMediaQuery } from 'react-responsive'

const SkeletonCard: FC = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 590px)',
  })
  return (
    <div className={classes.cardContainer}>
      <ContentLoader
        speed={2}
        width={isMobile ? 137 : 270}
        height={isMobile ? 132 : 441}
        backgroundColor="#f0f0f0"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="8" ry="8" width="270" height="441" />
      </ContentLoader>
    </div>
  )
}

export default SkeletonCard
