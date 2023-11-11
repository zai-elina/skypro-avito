import { createSlice } from '@reduxjs/toolkit'
import { IArticle, IUser } from '../../types'

interface IArticleStore {
  articleList: IArticle[]
  selectedArticle: IArticle
  sellerOfSelectedArticle: IUser
  searchResultArticleList: IArticle[]
  addModalOpen: boolean
}

const initialState: IArticleStore = {
  articleList: [],
  selectedArticle: {} as IArticle,
  sellerOfSelectedArticle: {} as IUser,
  searchResultArticleList: [],
  addModalOpen: false,
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
    openAddModal: (state, action) => {
      state.addModalOpen = action.payload
    },
  },
})

export const {
  setArticleList,
  changeSelectedArticle,
  changeSearchResultArticleList,
  changeSellerOfSelectedArticle,
  openAddModal,
} = articlesSlice.actions

export default articlesSlice.reducer
