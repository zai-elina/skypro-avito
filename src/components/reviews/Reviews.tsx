import React, { FC } from 'react'
import CloseButton from '../closeButton/CloseButton'
import { useAppDispatch, useAppSelector } from '../../store/reduxHook'
import { openReviewsModal } from '../../store/slices/articlesSlice'
import classes from './Reviews.module.css'
import { selectAtricleComments } from '../../store/selectors/articleSelectors'
import dayjs from 'dayjs'

const Reviews: FC = () => {
  const dispatch = useAppDispatch()
  const comments = useAppSelector(selectAtricleComments)
  return (
    <div>
      <h3 className={classes.modal__title}>Отзывы о товаре</h3>
      <CloseButton onClick={() => dispatch(openReviewsModal(false))} />
      <form className="modal__form-newArt form-newArt" id="formNewArt">
        <div className="form-newArt__block">
          <label htmlFor="text">Добавить отзыв</label>
          <textarea
            className="form-newArt__area"
            name="text"
            id="formArea"
            placeholder="Введите описание"
          ></textarea>
        </div>
        <button className="form-newArt__btn-pub btn-hov02" id="btnPublish">
          Опубликовать
        </button>
      </form>
      <div className={classes.modal__scroll}>
        <div className="modal__reviews reviews">
          {comments.map((item) => (
            <div className="reviews__review review">
              <div className="review__item">
                <div className="review__left">
                  <div className="review__img">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="review__right">
                  <p className="review__name font-t">
                    {item.author.name}{' '}
                    <span>
                      {dayjs(item.created_on).format('D MMMM, YYYY HH:mm')}
                    </span>
                  </p>
                  <h5 className="review__title font-t">Комментарий</h5>
                  <p className="review__text font-t">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Reviews
