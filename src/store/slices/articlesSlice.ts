import { createSlice } from '@reduxjs/toolkit'
import { IArticle, IComment } from '../../types'

interface IArticleStore {
  articleList: IArticle[]
  selectedArticle: IArticle
  selectedArticleComments: IComment[]
  searchResultArticleList: IArticle[]
  addModalOpen: boolean
  deleteModalOpen: boolean
  editModalOpen: boolean
  reviewsModalOpen: boolean
}

const initialState: IArticleStore = {
  articleList: [],
  selectedArticle: {} as IArticle,
  selectedArticleComments: [],
  searchResultArticleList: [],
  addModalOpen: false,
  deleteModalOpen: false,
  editModalOpen: false,
  reviewsModalOpen: false,
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
    openAddModal: (state, action) => {
      state.addModalOpen = action.payload
    },
    openDeleteModal: (state, action) => {
      state.deleteModalOpen = action.payload
    },
    editArticleModal: (state, action) => {
      state.editModalOpen = action.payload
    },
    openReviewsModal: (state, action) => {
      state.reviewsModalOpen = action.payload
    },
  },
})

export const {
  setArticleList,
  changeSelectedArticle,
  changeSearchResultArticleList,
  openAddModal,
  openDeleteModal,
  changeSelectedArticleComments,
  editArticleModal,
  openReviewsModal,
} = articlesSlice.actions

export default articlesSlice.reducer
