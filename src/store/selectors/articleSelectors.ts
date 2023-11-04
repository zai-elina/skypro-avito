import { RootState } from '../store'

export const selectArtticleList = (state: RootState) =>
  state.articleList.articleList

export const selectSelectedArtile = (state: RootState) =>
  state.articleList.selectedArticle

export const selectSellerOfSelectedArtile = (state: RootState) =>
  state.articleList.sellerOfSelectedArticle

export const selectSearchArticleList = (state: RootState) =>
  state.articleList.searchResultArticleList
