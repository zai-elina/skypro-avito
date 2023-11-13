import React, { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import classes from './ArticleEditForm.module.css'
import ButtonMain from '../../layout/buttons/buttonMain/ButtonMain'
import { useAppDispatch, useAppSelector } from '../../../store/reduxHook'
import { editArticleModal } from '../../../store/slices/articlesSlice'
import { selectSelectedArtile } from '../../../store/selectors/articleSelectors'
import {
  useEditArticleImgMutation,
  useEditArticleMutation,
} from '../../../store/services/articleList.api'
import CloseButton from '../../closeButton/CloseButton'

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
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [editArticle] = useEditArticleMutation()
  const [editArticleImg] = useEditArticleImgMutation()

  const onClose = () => {
    setSelectedImage(null)
    dispatch(editArticleModal(false))
  }

  const onSubmit = async (data: FieldValues) => {
    const { title, description, price } = data
    const formData = new FormData()
    if (selectedImage) {
      formData.append('file', selectedImage)
    }

    try {
      await editArticle({
        id: article.id,
        title: title,
        description: description,
        price: price,
      })

      if (selectedImage) {
        const uploadResponse = await editArticleImg({
          id: article.id,
          file: formData,
        })
        console.log(uploadResponse)
      }

      onClose()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <h3 className={classes.modal__title}>Редактировать объявление</h3>
      <CloseButton onClick={onClose}/>
      <form
        className={classes.modal__form_newArt}
        name="formEditArt"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={classes.modal__form_newArt__block}>
          <label htmlFor="name">Название</label>
          <input
            className={classes.modal__form_newArt__input}
            type="text"
            placeholder="Введите название"
            {...register('title')}
          />
        </div>
        <div className={classes.modal__form_newArt__block}>
          <label htmlFor="text">Описание</label>
          <textarea
            rows={20}
            className={classes.modal__form_newArt__area}
            placeholder="Введите описание"
            {...register('description')}
          ></textarea>
        </div>

        <div className={classes.modal__form_newArt__block}>
          <label>Фотографии товара</label>
          <div className={classes.modal__form_newArt__bar_img}>
            <div className={classes.modal__form_newArt__img}>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) {
                    setSelectedImage(file)
                  }
                }}
              />
              <img
                src={selectedImage ? URL.createObjectURL(selectedImage) : ''}
                alt=""
              />
              <div
                className={classes.modal__form_newArt__img_cover}
                onClick={() => {
                  const fileInput = document.getElementById('fileInput')
                  if (fileInput) {
                    fileInput.click()
                  }
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className={classes.modal__form_newArt__block}>
          <label htmlFor="price">Цена</label>
          <input
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
