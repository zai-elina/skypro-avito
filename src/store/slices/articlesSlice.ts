import { createSlice } from '@reduxjs/toolkit'
import { IArticle, IUser } from '../../types'

interface IArticleStore {
  articleList: IArticle[]
  selectedArticle: IArticle
  sellerOfSelectedArticle: IUser
  searchResultArticleList: IArticle[]
}

const initialState: IArticleStore = {
  articleList: [],
  selectedArticle: {} as IArticle,
  sellerOfSelectedArticle: {} as IUser,
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
    changeSellerOfSelectedArticle: (state, action) => {
      state.sellerOfSelectedArticle = action.payload
    },
  },
})

export const {
  setArticleList,
  changeSelectedArticle,
  changeSearchResultArticleList,
  changeSellerOfSelectedArticle,
} = articlesSlice.actions

export default articlesSlice.reducer
