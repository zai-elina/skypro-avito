import { configureStore } from '@reduxjs/toolkit'
import articlesSlice from './slices/articlesSlice'
import { api } from './services/api'
import userSlice from './slices/userSlice'

export const store = configureStore({
  reducer: {
    articleList: articlesSlice,
    user: userSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    api.middleware,
  ],
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
