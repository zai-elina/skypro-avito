import React, { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import classes from './ArticleEditForm.module.css'
import ButtonMain from '../../layout/buttons/buttonMain/ButtonMain'
import { useAppDispatch, useAppSelector } from '../../../store/reduxHook'
import { editArticleModal } from '../../../store/slices/articlesSlice'
import { selectSelectedArtile } from '../../../store/selectors/articleSelectors'
import {
  useEditArticleImgMutation,
  useEditArticleTextMutation,
} from '../../../store/services/articleList.api'
import CloseButton from '../../closeButton/CloseButton'
import { hostDomain } from '../../../constants'

const ArticleEditForm = () => {
  const article = useAppSelector(selectSelectedArtile)
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: article.title ? article.title : '',
      description: article.description ? article.description : '',
      price: article.price ? article.price : '',
    },
  })
  const dispatch = useAppDispatch()
  const [selectedImages, setSelectedImages] = useState<File[]>([])
  const [editArticleText] = useEditArticleTextMutation()
  const [editArticleImg] = useEditArticleImgMutation()

  const onClose = () => {
    if (selectedImages.length > 0) {
      setSelectedImages([])
    }
    dispatch(editArticleModal(false))
  }

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

    try {
      await editArticleText({
        id: article.id,
        title: title,
        description: description,
        price: price,
      })
      selectedImages.forEach((image, index) => {
        const formData = new FormData()
        formData.append(`file`, image)
        editArticleImg({
          id: article.id,
          file: formData,
        })
      })
      onClose()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <h3 className={classes.modal__title}>Редактировать объявление</h3>
      <CloseButton onClick={onClose} />
      <form
        className={classes.modal__form_newArt}
        name="formEditArt"
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
          <label htmlFor="description">Описание</label>
          <textarea
            id="description"
            rows={20}
            className={classes.modal__form_newArt__area}
            placeholder="Введите описание"
            {...register('description')}
          ></textarea>
        </div>

        <div className={classes.modal__form_newArt__block}>
          <label htmlFor="images">Фотографии товара</label>
          <div className={classes.modal__form_newArt__bar_img} id="images">
            {article?.images.map((image) => (
              <div className={classes.modal__form_newArt__img} key={image.id}>
                <img src={`${hostDomain}/${image.url}`} alt="" />
              </div>
            ))}
            {Array(5 - article?.images.length)
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

        <ButtonMain text={'Сохранить'} style={{ marginTop: '20px' }} />
      </form>
    </>
  )
}

export default ArticleEditForm
