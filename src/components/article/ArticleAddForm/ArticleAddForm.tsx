import React, { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import classes from './ArticleAddForm.module.css'
import ButtonMain from '../../layout/buttons/buttonMain/ButtonMain'
import { useAppDispatch } from '../../../store/reduxHook'
import { openAddModal } from '../../../store/slices/articlesSlice'
import { useCreateArticleMutation } from '../../../store/services/articleList.api'
import CloseButton from '../../closeButton/CloseButton'
import { useNavigate} from 'react-router-dom'

const ArticleAddForm = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([])
  const { register, handleSubmit, reset } = useForm()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [createArticle] = useCreateArticleMutation()

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(e.target.dataset.index)
    const file = e.target.files && e.target.files[0]

    if (file && file.type.startsWith('image/')) {
      setSelectedImages((prevImages) => {
        const updatedImages = [...prevImages]
        updatedImages[index] = file
        return updatedImages
      })
    } else {
      console.error('Выбранный файл не является изображением')
    }
  }

  const onSubmit = async (data: FieldValues) => {
    const { title, description, price } = data
    if (selectedImages.length === 0) {
      await createArticle({
        title: title,
        description: description,
        price: price,
      })
    } else {
      await createArticle({
        title: title,
        description: description,
        price: price,
        images: selectedImages,
      })
    }
    dispatch(openAddModal(false))
    reset()
    setSelectedImages([])
    navigate('/profile')
  }

  return (
    <>
      <h3 className={classes.modal__title}>Новое объявление</h3>
      <CloseButton
        onClick={() => {
          dispatch(openAddModal(false))
          reset()
        }}
      />
      <form
        className={classes.modal__form_newArt}
        name="formNewArt"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={classes.modal__form_newArt__block}>
          <label htmlFor="name">Название</label>
          <input
            id="name"
            className={classes.modal__form_newArt__input}
            type="text"
            placeholder="Введите название"
            {...register('title')}
          />
        </div>
        <div className={classes.modal__form_newArt__block}>
          <label htmlFor="text">Описание</label>
          <textarea
            id="text"
            rows={20}
            className={classes.modal__form_newArt__area}
            placeholder="Введите описание"
            {...register('description')}
          ></textarea>
        </div>
        <div className={classes.modal__form_newArt__block}>
          <label htmlFor="images">Фотографии товара не более 5</label>
          <div className={classes.modal__form_newArt__bar_img} id="images">
            {Array(5)
              .fill('')
              .map((_, index) => (
                <div className={classes.modal__form_newArt__img} key={index}>
                  <input
                    id={`fileInput-${index}`}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    data-index={index}
                    onChange={(e) => onChangeImage(e)}
                  />
                  {selectedImages[index] ? (
                    <img
                      src={URL.createObjectURL(selectedImages[index])}
                      alt=""
                    />
                  ) : (
                    <div
                      className={classes.modal__form_newArt__img_cover}
                      onClick={() => {
                        const fileInput = document.getElementById(
                          `fileInput-${index}`,
                        )
                        if (fileInput) {
                          fileInput.click()
                        }
                      }}
                    ></div>
                  )}
                </div>
              ))}
          </div>
        </div>
        <div className={classes.modal__form_newArt__block}>
          <label htmlFor="price">Цена</label>
          <input
            id="price"
            className={classes.modal__form_newArt__input_price}
            type="number"
            placeholder="₽"
            {...register('price')}
          />
        </div>

        <ButtonMain text={'Опубликовать'} style={{ marginTop: '20px' }} />
      </form>
    </>
  )
}

export default ArticleAddForm
