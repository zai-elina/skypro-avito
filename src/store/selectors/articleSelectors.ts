import { RootState } from '../store'

export const selectArtticleList = (state: RootState) =>
  state.articleList.articleList

export const selectSelectedArtile = (state: RootState) =>
  state.articleList.selectedArticle

export const selectAtricleComments = (state: RootState) =>
  state.articleList.selectedArticleComments

export const selectSearchArticleList = (state: RootState) =>
  state.articleList.searchResultArticleList

export const selectAddModalOpen = (state: RootState) =>
  state.articleList.addModalOpen

export const selectDeleteModalOpen = (state: RootState) =>
  state.articleList.deleteModalOpen

export const selectEditModalOpen = (state: RootState) =>
  state.articleList.editModalOpen

export const selectReviewsModalOpen = (state: RootState) =>
  state.articleList.reviewsModalOpen
