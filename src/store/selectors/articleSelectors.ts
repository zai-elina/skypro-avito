import { RootState } from '../store'

export const selectSelectedArtile = (state: RootState) =>
  state.articleList.selectedArticle
