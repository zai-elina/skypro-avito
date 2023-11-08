import { IArticle } from '../../types'
import { api } from './api'

export const articleList = api.injectEndpoints({
  endpoints: (builder) => ({
    getArticleData: builder.query<IArticle, number>({
      query: (id) => `ads/${id}`,
      providesTags: (result) =>
        Array.isArray(result)
          ? [
              ...result.map(({ id }) => ({
                type: 'Article' as const,
                id,
              })),
              'Article',
            ]
          : ['Article'],
    }),
    getUserArticles: builder.query<IArticle[], unknown>({
      query: () => ({ url: `ads/me` }),
    }),
  }),
})

export const { useGetArticleDataQuery, useGetUserArticlesQuery } = articleList
