import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const hostDomain = `http://localhost:8090`

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: hostDomain }),
  tagTypes: ['ArticleList'],
  endpoints: (builder) => ({
    getArticleListData: builder.query({
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
