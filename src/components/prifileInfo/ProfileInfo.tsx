import React, { FC, useState } from 'react'
import classes from './ProfileInfo.module.css'
import ButtonMain from '../layout/buttons/buttonMain/ButtonMain'
import { useAppSelector } from '../../store/reduxHook'
import { selectSellerOfSelectedArtile } from '../../store/selectors/articleSelectors'
import dayjs from 'dayjs'
import { hostDomain } from '../../constants'
import { maskString } from '../../utils/maskPhone'

const ProfileInfo: FC = () => {
  const seller = useAppSelector(selectSellerOfSelectedArtile)
  const { name, city, sells_from, avatar, phone } = seller
  const [phoneIsOpen, setPhoneIsOpen] = useState(false)

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
              text={`Показать телефон\n${
                phoneIsOpen ? phone : maskString(phone)
              }`}
              onClick={() => {
                setPhoneIsOpen(!phoneIsOpen)
              }}
              style={{
                whiteSpace: 'pre-line',
                width: '214px',
                height: '62px',
                marginLeft: '0',
                marginTop: '10px',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
