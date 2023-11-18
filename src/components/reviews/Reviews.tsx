import React, { FC } from 'react'
import CloseButton from '../closeButton/CloseButton'
import { useAppDispatch, useAppSelector } from '../../store/reduxHook'
import { openReviewsModal } from '../../store/slices/articlesSlice'
import classes from './Reviews.module.css'
import {
  selectAtricleComments,
  selectSelectedArtile,
} from '../../store/selectors/articleSelectors'
import dayjs from 'dayjs'
import { hostDomain } from '../../constants'
import ButtonMain from '../layout/buttons/buttonMain/ButtonMain'
import { FieldValues, useForm } from 'react-hook-form'
import { useAddReviewMutation } from '../../store/services/articleList.api'
import { selectUser } from '../../store/selectors/userSelector'

const Reviews: FC = () => {
  const comments = useAppSelector(selectAtricleComments)
  const article = useAppSelector(selectSelectedArtile)
  const authUser = useAppSelector(selectUser)
  const [addReview] = useAddReviewMutation()
  const dispatch = useAppDispatch()
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data: FieldValues) => {
    await addReview({ id: article.id, text: data.text })
  }

  return (
    <div>
      <h3 className={classes.modal__title}>Отзывы о товаре</h3>
      <CloseButton onClick={() => dispatch(openReviewsModal(false))} />
      <form
        className={classes.commentForm}
        name="commentAdd"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={classes.commentBlock}>
          <label htmlFor="formArea">Добавить отзыв</label>
          <textarea
            className={classes.commentTextarea}
            id="formArea"
            placeholder="Введите описание"
            {...register('text')}
          ></textarea>
        </div>
        <ButtonMain
          type="submit"
          text="Опубликовать"
          onClick={() => {}}
          disabled={Object.keys(authUser).length === 0}
        />
      </form>
      <div className={classes.modal__scroll}>
        <div className={classes.reviewContainer}>
          {comments.map((item) => (
            <div className={classes.review} key={item.id}>
              <div className={classes.reviewItem}>
                <div className={classes.reviewLeft}>
                  <div className={classes.reviewImg}>
                    <img src={`${hostDomain}/${item.author.avatar}`} alt="" />
                  </div>
                </div>
                <div className={classes.reviewRight}>
                  <p className={classes.reviewName}>
                    {item.author.name}{' '}
                    <span>
                      {dayjs(item.created_on).format('D MMMM, YYYY HH:mm')}
                    </span>
                  </p>
                  <h5 className={classes.review__title}>Комментарий</h5>
                  <p className={classes.review__text}>{item.text}</p>
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
