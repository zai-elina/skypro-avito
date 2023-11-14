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
  const [changeAvatar] = useChangeAvatarMutation()
  const [changeUserData] = useChangeUserDataMutation()
  const [selectedImage, setSelectedImage] = useState<File | null>(null)

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

  const sendContent = async (file: File) => {
    const formData = new FormData()
    if (file) {
      formData.append('file', file)
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
                  src={
                    selectedImage
                      ? URL.createObjectURL(selectedImage)
                      : `${hostDomain}/${authUser.avatar}`
                  }
                  alt={`${authUser.name}`}
                />
              )}
            </div>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={(e) => {
                e.preventDefault()
                const file = e.target.files?.[0]
                if (file) {
                  setSelectedImage(file)
                  sendContent(file)
                }
              }}
            />
            <button
              className={classes.settingsChangePhoto}
              onClick={() => {
                const fileInput = document.getElementById('fileInput')
                if (fileInput) {
                  fileInput.click()
                }
              }}
            >
              Заменить
            </button>
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
