import { createSlice } from '@reduxjs/toolkit'
import { IArticle, IComment, IUser } from '../../types'

interface IArticleStore {
  articleList: IArticle[]
  selectedArticle: IArticle
  selectedArticleComments: IComment[]
  sellerOfSelectedArticle: IUser
  searchResultArticleList: IArticle[]
  addModalOpen: boolean
  deleteModalOpen: boolean
  editModalOpen: boolean
}

const initialState: IArticleStore = {
  articleList: [],
  selectedArticle: {} as IArticle,
  selectedArticleComments: [],
  sellerOfSelectedArticle: {} as IUser,
  searchResultArticleList: [],
  addModalOpen: false,
  deleteModalOpen: false,
  editModalOpen: false,
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
    changeSelectedArticleComments: (state, action) => {
      state.selectedArticleComments = action.payload
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
    openDeleteModal: (state, action) => {
      state.deleteModalOpen = action.payload
    },
    editArticleModal: (state, action) => {
      state.editModalOpen = action.payload
    },
  },
})

export const {
  setArticleList,
  changeSelectedArticle,
  changeSearchResultArticleList,
  changeSellerOfSelectedArticle,
  openAddModal,
  openDeleteModal,
  changeSelectedArticleComments,
  editArticleModal,
} = articlesSlice.actions

export default articlesSlice.reducer
