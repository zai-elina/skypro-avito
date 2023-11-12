import React, { FC, ReactNode, useEffect, useState } from 'react'
import ButtonMain from '../layout/buttons/buttonMain/ButtonMain'
import { Link, useNavigate } from 'react-router-dom'
import classes from './Article.module.css'
import { useAppDispatch, useAppSelector } from '../../store/reduxHook'
import {
  selectDeleteModalOpen,
  selectSelectedArtile,
} from '../../store/selectors/articleSelectors'
import dayjs from 'dayjs'
import { hostDomain } from '../../constants'
import {
  changeSellerOfSelectedArticle,
  openDeleteModal,
} from '../../store/slices/articlesSlice'
import { maskString } from '../../utils/maskPhone'
import { selectUser } from '../../store/selectors/userSelector'
import Modal from '../layout/modal/Modal'
import { useDeleteArticleMutation } from '../../store/services/articleList.api'

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

  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [])

  useEffect(() => {
    dispatch(changeSellerOfSelectedArticle(user))
  }, [dispatch, user])

  const onClickDeleteButton = () => {
    dispatch(openDeleteModal(true))
  }

  const onClickDeleteArticle = async () => {
    await deleteAtricle(id)
    if (deleteError) {
      alert('Произошла ошибка')
    }
    navigate('/')
  }

  const ConstructorButtonArticle: IConstructorButtonArticle = {
    authUserArticle: (
      <>
        <ButtonMain
          text="Снять с публикации"
          onClick={onClickDeleteButton}
          style={{
            whiteSpace: 'pre-line',
            width: '214px',
            height: '62px',
            marginLeft: '0',
          }}
        />
      </>
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
          <div className={classes.articleImgContainer}>
            <div className={classes.articleImg}>
              {images && images.length !== 0 ? (
                <img src={`${hostDomain}/${images[0].url}`} alt={title} />
              ) : (
                <img src="../../img/box.jpg" alt={title} />
              )}
            </div>
            <div className={classes.articleImgBar}>
              {images?.map((img) => (
                <div className={classes.articleImgBarItem} key={img.id}>
                  <img src={`${hostDomain}/${img.url}`} alt="" />
                </div>
              ))}
            </div>
            <div className={classes.articleImgBarMob}>
              {/* !!!подключить слайдер */}
              <div className="img-bar-mob__circle circle-active"></div>
              <div className="img-bar-mob__circle"></div>
              <div className="img-bar-mob__circle"></div>
              <div className="img-bar-mob__circle"></div>
              <div className="img-bar-mob__circle"></div>
            </div>
          </div>
        </div>
        <div className={classes.articleRight}>
          <div className={classes.articleВlock}>
            <h3 className={classes.acrticleTitle}>{title}</h3>
            <div>
              <p className={classes.articleTextInfo}>
                {dayjs(created_on).format('D MMMM, YYYY HH:mm')}
              </p>
              <p className={classes.articleTextInfo}>{user?.city}</p>
              <Link to="/">23 отзыва</Link>
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
                    Продает товары {user?.sells_from}
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
        <div
          className={classes.modal__btn_close}
          onClick={() => dispatch(openDeleteModal(false))}
        >
          <div className={classes.modal__btn_close_line}></div>
        </div>
        <div style={{ marginTop: '30px' }}>Хотите скрыть объявление?</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '20px',
          }}
        >
          <ButtonMain text="Скрыть" onClick={onClickDeleteArticle} />
        </div>
      </Modal>
    </>
  )
}

export default Article
