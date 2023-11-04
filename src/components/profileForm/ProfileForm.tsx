import React, { FC } from 'react'
import classes from './ProfileForm.module.css'
import ButtonMain from '../layout/buttons/buttonMain/ButtonMain'

const ProfileForm: FC = () => {
  return (
    <div className={classes.mainProfile}>
      <div className={classes.profileContent}>
        <h3 className={classes.profileTitle}>Настройки профиля</h3>
        <div className={classes.profileSettings}>
          <div className={classes.settingsLeft}>
            <div className={classes.settingsImg}>
              <a href="" target="_self">
                <img src="#" alt="" />
              </a>
            </div>
            <a className={classes.settingsChangePhoto} href="#" target="_self">
              Заменить
            </a>
          </div>
          <div className={classes.settingsRight}>
            <form className={classes.settingsForm} action="#">
              <div className={classes.settingsDiv}>
                <label htmlFor="name">Имя</label>
                <input
                  className={classes.settings__fname}
                  id="settings-fname"
                  name="fname"
                  type="text"
                  value="Ан"
                  placeholder=""
                />
              </div>

              <div className={classes.settingsDiv}>
                <label htmlFor="lname">Фамилия</label>
                <input
                  className={classes.settings__lname}
                  id="settings-lname"
                  name="lname"
                  type="text"
                  value="Городецкий"
                  placeholder=""
                />
              </div>

              <div className={classes.settingsDiv}>
                <label htmlFor="city">Город</label>
                <input
                  className={classes.settings__city}
                  id="settings-city"
                  name="city"
                  type="text"
                  value="Санкт-Петербург"
                  placeholder=""
                />
              </div>

              <div className={classes.settingsDiv}>
                <label htmlFor="phone">Телефон</label>
                <input
                  className={classes.settings__phone}
                  id="settings-phone"
                  name="phone"
                  type="tel"
                  value="89161234567"
                  placeholder="+79161234567"
                />
              </div>

              <ButtonMain
                onClick={() => console.log('settings')}
                text="Сохранить"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileForm
