import { createSlice } from '@reduxjs/toolkit'
import { IArticle } from '../../types'

interface IArticleStore {
  articleList: IArticle[]
}

const initialState: IArticleStore = {
  articleList: [],
}

export const articlesSlice = createSlice({
  name: 'articlesSlice',
  initialState,
  reducers: {
    setArticleList: (state, action) => {
      state.articleList = action.payload
    },
  },
})

export const { setArticleList } = articlesSlice.actions

export default articlesSlice.reducer
