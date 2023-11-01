import { RootState } from '../store'

export const selectArtticleList = (state: RootState) =>
  state.articleList.articleList

export const selectSelectedArtile = (state: RootState) =>
  state.articleList.selectedArticle

export const selectSearchArticleList = (state: RootState) =>
  state.articleList.searchResultArticleList
