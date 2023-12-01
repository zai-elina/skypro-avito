import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import LayoutPage from '../pages/layoutPage/LayoutPage'
import MainPage from '../pages/mainPage/MainPage'
import LoginPage from '../pages/loginPage/LoginPage'
import RegisterPage from '../pages/registerPage/RegisterPage'
import { ProtectedRoute } from './ProtectedRoute'
import ArticlePage from '../pages/articlePage/ArticlePage'
import SellerProfilePage from '../pages/sellerProfilePage/SellerProfilePage'
import ProfilePage from '../pages/profilePage/ProfilePage'
import NotFound from '../pages/notFound/NotFound'
import ReviewsPage from '../pages/reviewsPage/ReviewsPage'

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/article/:id/reviews" element={<ReviewsPage />} />
        <Route path="/user/:id" element={<SellerProfilePage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
