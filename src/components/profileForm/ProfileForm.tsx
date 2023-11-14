import React, { FC, useEffect, useState } from 'react'
import classes from './ProfileForm.module.css'
import ButtonMain from '../layout/buttons/buttonMain/ButtonMain'
import { useAppSelector } from '../../store/reduxHook'
import { selectUser } from '../../store/selectors/userSelector'
import { useForm } from 'react-hook-form'
import { hostDomain } from '../../constants'
import {
  useChangeAvatarMutation,
  useChangeUserDataMutation,
} from '../../store/services/user.api'
import { IUser } from '../../types'

interface IProfileFormData {
  name: string
  surname: string
  city: string
  phone: string
}

const ProfileForm: FC = () => {
  const authUser = useAppSelector(selectUser)
  const { register, handleSubmit, reset } = useForm<IProfileFormData>({
    defaultValues: {
      name: authUser.name ? authUser.name : '',
      surname: authUser.surname ? authUser.surname : '',
      city: authUser.city ? authUser.city : '',
      phone: authUser.phone ? authUser.phone : '',
    },
  })
  const [image, setImage] = useState<null | File>(null)
  const [changeAvatar] = useChangeAvatarMutation()
  const [changeUserData] = useChangeUserDataMutation()

  useEffect(() => {
    reset({
      name: authUser.name,
      surname: authUser.surname,
      city: authUser.city,
      phone: authUser.phone,
    })
  }, [authUser, reset])

  const onSubmit = async (
    data: Pick<IUser, 'name' | 'phone' | 'surname' | 'city'>,
  ) => {
    await changeUserData(data)
  }

  const uploadContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const files = event.target.files
    if (files && files.length > 0) {
      setImage(files[0])
    }
  }

  const sendContent = async (event: React.FormEvent) => {
    event.preventDefault()
    const formData = new FormData()
    if (image) {
      formData.append('file', image)
      await changeAvatar(formData)
    }
  }

  return (
    <div className={classes.mainProfile}>
      <div className={classes.profileContent}>
        <h3 className={classes.profileTitle}>Настройки профиля</h3>
        <div className={classes.profileSettings}>
          <div className={classes.settingsLeft}>
            <div className={classes.settingsImg}>
              {authUser.avatar && (
                <img
                  src={`${hostDomain}/${authUser.avatar}`}
                  alt={`${authUser.name}`}
                />
              )}
            </div>
            <a
              className={classes.settingsChangePhoto}
              onClick={(e) => sendContent(e)}
              href="/"
            >
              Заменить
            </a>
            <input
              type={'file'}
              accept={'image/*'}
              onChange={(e) => uploadContent(e)}
            />
          </div>
          <div className={classes.settingsRight}>
            <form
              className={classes.settingsForm}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className={classes.settingsDiv}>
                <label htmlFor="name">Имя</label>
                <input
                  className={classes.settings__fname}
                  id="settings-fname"
                  type="text"
                  placeholder=""
                  {...register('name')}
                />
              </div>

              <div className={classes.settingsDiv}>
                <label htmlFor="lname">Фамилия</label>
                <input
                  className={classes.settings__lname}
                  id="settings-lname"
                  type="text"
                  placeholder=""
                  {...register('surname')}
                />
              </div>

              <div className={classes.settingsDiv}>
                <label htmlFor="city">Город</label>
                <input
                  className={classes.settings__city}
                  id="settings-city"
                  type="text"
                  placeholder=""
                  {...register('city')}
                />
              </div>

              <div className={classes.settingsDiv}>
                <label htmlFor="phone">Телефон</label>
                <input
                  className={classes.settings__phone}
                  id="settings-phone"
                  type="number"
                  placeholder=""
                  {...register('phone')}
                />
              </div>
              <ButtonMain text="Сохранить" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileForm
