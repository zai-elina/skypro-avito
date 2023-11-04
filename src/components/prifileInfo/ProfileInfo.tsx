import React, { FC } from 'react'
import classes from './ProfileInfo.module.css'
import ButtonMain from '../layout/buttons/buttonMain/ButtonMain'
import { useAppSelector } from '../../store/reduxHook'
import { selectSellerOfSelectedArtile } from '../../store/selectors/articleSelectors'
import dayjs from 'dayjs'
import { hostDomain } from '../../constants'

const ProfileInfo: FC = () => {
  const seller = useAppSelector(selectSellerOfSelectedArtile)
  const { name, city, sells_from, avatar, phone } = seller

  return (
    <div className={classes.profileSell}>
      <div className={classes.profileSellContent}>
        <div className={classes.profileSellSeller}>
          <div className={classes.sellerLeft}>
            <div className={classes.sellerImg}>
              <img src={`${hostDomain}/${avatar}`} alt={name} />
            </div>
          </div>
          <div className={classes.sellerRight}>
            <h3>{name}</h3>
            <p className={classes.sellerText}>{city}</p>
            <p className={classes.sellerText}>
              Продает товары с {dayjs(sells_from).format('D MMMM, YYYY HH:mm')}
            </p>

            <div className={classes.sellerImgMob}>
              <div className={classes.imgMob}>
                <img src={`${hostDomain}/${avatar}`} alt={name} />
              </div>
            </div>

            <ButtonMain
              text={`Показать телефон\n8 9XX XXX XX XX`}
              onClick={() => console.log(phone)}
              style={{
                whiteSpace: 'pre-line',
                width: '214px',
                height: '62px',
                marginLeft: '0',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
