import React, { FC, ReactNode, useEffect, useState } from 'react'
import ButtonMain from '../layout/buttons/buttonMain/ButtonMain'
import { Link, useNavigate } from 'react-router-dom'
import classes from './Article.module.css'
import { useAppDispatch, useAppSelector } from '../../store/reduxHook'
import {
  selectAtricleComments,
  selectDeleteModalOpen,
  selectEditModalOpen,
  selectReviewsModalOpen,
  selectSelectedArtile,
} from '../../store/selectors/articleSelectors'
import dayjs from 'dayjs'
import { hostDomain } from '../../constants'
import {
  editArticleModal,
  openDeleteModal,
  openReviewsModal,
} from '../../store/slices/articlesSlice'
import { maskString } from '../../utils/maskPhone'
import { selectUser } from '../../store/selectors/userSelector'
import Modal from '../layout/modal/Modal'
import { useDeleteArticleMutation } from '../../store/services/articleList.api'
import ArticleEditForm from './ArticleEditForm/ArticleEditForm'
import Reviews from '../reviews/Reviews'
import CloseButton from '../closeButton/CloseButton'
import ArticleImg from './ArticleImg/ArticleImg'
import { useMediaQuery } from 'react-responsive'

interface IConstructorButtonArticle {
  authUserArticle: ReactNode
  userArticle: ReactNode
}

const Article: FC = () => {
  const article = useAppSelector(selectSelectedArtile)
  const { title, price, user, created_on, images, id } = article
  const dispatch = useAppDispatch()
  const [phoneIsOpen, setPhoneIsOpen] = useState(false)
  const authUser = useAppSelector(selectUser)
  const [buttonType] = useState<keyof IConstructorButtonArticle>(
    user?.id === authUser?.id ? 'authUserArticle' : 'userArticle',
  )
  const activeDeleteModal = useAppSelector(selectDeleteModalOpen)
  const [deleteAtricle, { isError: deleteError }] = useDeleteArticleMutation()
  const navigate = useNavigate()
  const comments = useAppSelector(selectAtricleComments)
  const activeEditModal = useAppSelector(selectEditModalOpen)
  const reviewsModal = useAppSelector(selectReviewsModalOpen)
  const isMobile = useMediaQuery({
    query: '(max-width: 620px)',
  })

  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [])

  const onClickDeleteButton = () => {
    dispatch(openDeleteModal(true))
  }

  const onClickDeleteArticle = async () => {
    await deleteAtricle(id)
    if (deleteError) {
      alert('Произошла ошибка')
    }
    navigate('/profile')
    dispatch(openDeleteModal(false))
  }

  const onClickEditButton = () => {
    isMobile ? navigate('/article/edit') : dispatch(editArticleModal(true))
  }

  const onClickReviewsButton = () => {
    if (isMobile) {
      navigate(`/article/${id}/reviews`)
    } else {
      dispatch(openReviewsModal(true))
    }
  }

  const ConstructorButtonArticle: IConstructorButtonArticle = {
    authUserArticle: (
      <div className={classes.buttonContainer}>
        <ButtonMain
          text="Редактировать"
          onClick={onClickEditButton}
          style={{
            whiteSpace: 'pre-line',
            width: '214px',
            height: '62px',
            marginLeft: '0',
          }}
        />{' '}
        <ButtonMain
          text="Удалить"
          onClick={onClickDeleteButton}
          style={{
            whiteSpace: 'pre-line',
            width: '214px',
            height: '62px',
            marginLeft: '0',
          }}
        />
      </div>
    ),
    userArticle: (
      <>
        {user?.phone && (
          <ButtonMain
            text={`Показать телефон\n${
              phoneIsOpen
                ? user?.phone
                : maskString(user?.phone ? user.phone : '')
            }`}
            onClick={() => {
              setPhoneIsOpen(!phoneIsOpen)
            }}
            style={{
              whiteSpace: 'pre-line',
              width: '214px',
              height: '62px',
              marginLeft: '0',
            }}
          />
        )}
      </>
    ),
  }

  return (
    <>
      <div className={classes.article}>
        <div className={classes.articleLeft}>
          <ArticleImg title={title} images={images} />
        </div>
        <div className={classes.articleRight}>
          <div className={classes.articleВlock}>
            <h3 className={classes.acrticleTitle}>{title}</h3>
            <div>
              <p className={classes.articleTextInfo}>
                {dayjs(created_on).format('D MMMM, YYYY HH:mm')}
              </p>
              <p className={classes.articleTextInfo}>{user?.city}</p>
              <button
                className={classes.buttonLink}
                onClick={onClickReviewsButton}
              >
                {comments.length} отзывов
              </button>
            </div>
            <p className={classes.articlePrice}>{price} ₽</p>
            {ConstructorButtonArticle[buttonType]}

            <Link to={`/user/${user?.id}`}>
              <div className={classes.articleAuthor}>
                <div className={classes.articleAuthorImg}>
                  <img src={`${hostDomain}/${user?.avatar}`} alt="" />
                </div>
                <div style={{ marginLeft: '12px' }}>
                  <p className={classes.authorName}>{user?.name}</p>
                  <p className={classes.articleTextInfo}>
                    Продает товары с{' '}
                    {dayjs(user?.sells_from).format('D MMMM, YYYY')}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Modal
        active={activeDeleteModal}
        closeModal={() => dispatch(openDeleteModal(false))}
      >
        <CloseButton onClick={() => dispatch(openDeleteModal(false))} />
        <div style={{ marginTop: '30px' }}>Хотите удалить объявление?</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '20px',
          }}
        >
          <ButtonMain text="Удалить" onClick={onClickDeleteArticle} />
        </div>
      </Modal>
      <Modal
        active={activeEditModal}
        closeModal={() => dispatch(editArticleModal(false))}
      >
        <ArticleEditForm />
      </Modal>
      <Modal
        active={reviewsModal}
        closeModal={() => dispatch(openReviewsModal(false))}
      >
        <Reviews />
      </Modal>
    </>
  )
}

export default Article
