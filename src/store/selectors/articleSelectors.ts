import { RootState } from '../store'

export const selectArtticleList = (state: RootState) =>
state.articleList.articleList

export const selectSelectedArtile = (state: RootState) =>
  state.articleList.selectedArticle
