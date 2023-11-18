import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import classes from './ArticleAddForm.module.css'
import ButtonMain from '../../layout/buttons/buttonMain/ButtonMain'
import { useAppDispatch } from '../../../store/reduxHook'
import { openAddModal } from '../../../store/slices/articlesSlice'
import { useCreateArticleMutation } from '../../../store/services/articleList.api'
import CloseButton from '../../closeButton/CloseButton'

const ArticleAddForm = () => {
  const { register, handleSubmit, reset } = useForm()
  const dispatch = useAppDispatch()
  const [createArticle] = useCreateArticleMutation()

  const onSubmit = async (data: FieldValues) => {
    const { title, description, price } = data
    await createArticle({
      title: title,
      description: description,
      price: price,
    })
    dispatch(openAddModal(false))
    reset()
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
