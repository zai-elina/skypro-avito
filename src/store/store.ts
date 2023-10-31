import { configureStore } from '@reduxjs/toolkit'
import articlesSlice from './slices/articlesSlice'
import { api } from './services/api'

export const store = configureStore({
  reducer: {
    articleList: articlesSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    api.middleware,
  ],
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
