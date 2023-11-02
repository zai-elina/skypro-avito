import { createSlice } from '@reduxjs/toolkit'
import { IArticle } from '../../types'

interface IArticleStore {
  articleList: IArticle[]
  selectedArticle: IArticle
  searchResultArticleList: IArticle[]
}

const initialState: IArticleStore = {
  articleList: [],
  selectedArticle: {} as IArticle,
  searchResultArticleList: [],
}

export const articlesSlice = createSlice({
  name: 'articlesSlice',
  initialState,
  reducers: {
    setArticleList: (state, action) => {
      state.articleList = action.payload
    },
    changeSelectedArticle: (state, action) => {
      state.selectedArticle = action.payload
    },
    changeSearchResultArticleList: (state, action) => {
      state.searchResultArticleList = action.payload
    },
  },
})

export const {
  setArticleList,
  changeSelectedArticle,
  changeSearchResultArticleList,
} = articlesSlice.actions

export default articlesSlice.reducer
