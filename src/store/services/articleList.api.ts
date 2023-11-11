import { IArticle, IArticleForm } from '../../types'
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
    createArticle: builder.mutation<IArticle[], IArticleForm>({
      query: (value) => ({
        url: `adstext`,
        method: 'POST',
        body: {
          title: value.title,
          description: value.description,
          price: value.price,
        },
      }),
      invalidatesTags: ['Profile'],
    }),
  }),
})

export const {
  useGetArticleDataQuery,
  useGetUserArticlesQuery,
  useCreateArticleMutation,
} = articleList
