import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import classes from './ArticleAddForm.module.css'
import ButtonMain from '../../layout/buttons/buttonMain/ButtonMain'
import { useAppDispatch } from '../../../store/reduxHook'
import { openAddModal } from '../../../store/slices/articlesSlice'
import { useCreateArticleMutation } from '../../../store/services/articleList.api'

const ArticleAddForm = () => {
  const { register, handleSubmit } = useForm()
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
  }

  return (
    <>
      <h3 className={classes.modal__title}>Новое объявление</h3>
      <div
        className={classes.modal__btn_close}
        onClick={() => dispatch(openAddModal(false))}
      >
        <div className={classes.modal__btn_close_line}></div>
      </div>
      <form
        className={classes.modal__form_newArt}
        name="formNewArt"
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
          <label htmlFor="price">Цена</label>
          <input
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
