import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { hostDomain } from '../../constants'
import { IArticle } from '../../types'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: hostDomain }),
  tagTypes: ['ArticleList', 'Article'],
  endpoints: (builder) => ({
    getArticleListData: builder.query<IArticle[], unknown>({
      query: () => `ads`,
      providesTags: (result) =>
        Array.isArray(result)
          ? [
              ...result.map(({ id }) => ({
                type: 'ArticleList' as const,
                id,
              })),
              'ArticleList',
            ]
          : ['ArticleList'],
    }),
  }),
})

export const { useGetArticleListDataQuery } = api
