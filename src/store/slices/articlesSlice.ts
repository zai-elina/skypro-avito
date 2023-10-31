import { createSlice } from '@reduxjs/toolkit'
import { IArticle } from '../../types'

interface IArticleStore {
  articleList: IArticle[]
  selectedArticle: IArticle
}

const initialState: IArticleStore = {
  articleList: [],
  selectedArticle: {} as IArticle,
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
  },
})

export const { setArticleList, changeSelectedArticle } = articlesSlice.actions

export default articlesSlice.reducer
