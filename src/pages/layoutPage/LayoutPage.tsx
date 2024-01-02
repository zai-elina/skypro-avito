import React, { FC } from 'react'
import classes from './LayoutPage.module.css'
import Header from '../../components/layout/header/Header'
import { Outlet } from 'react-router-dom'
import Modal from '../../components/layout/modal/Modal'
import { useAppDispatch, useAppSelector } from '../../store/reduxHook'
import { selectAddModalOpen } from '../../store/selectors/articleSelectors'
import { openAddModal } from '../../store/slices/articlesSlice'
import ArticleAddForm from '../../components/article/ArticleAddForm/ArticleAddForm'
import Footer from '../../components/layout/footer/Footer'

const LayoutPage: FC = () => {
  const activeAddModal = useAppSelector(selectAddModalOpen)
  const dispatch = useAppDispatch()
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Header />
        <Outlet />
      </div>
      <Modal
        active={activeAddModal}
        closeModal={() => dispatch(openAddModal(false))}
      >
        <ArticleAddForm />
      </Modal>
      <Footer />
    </div>
  )
}

export default LayoutPage
