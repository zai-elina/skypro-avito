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
    getArticleDataComments: builder.query<IArticle, number>({
      query: (id) => `ads/${id}/comments`,
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
    deleteArticle: builder.mutation<IArticle[], number>({
      query: (id) => ({
        url: `ads/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['ArticleList'],
    }),
    editArticle: builder.mutation<IArticle[], IArticleForm>({
      query: (value) => ({
        url: `ads/${value.id}`,
        method: 'PATCH',
        body: {
          title: value.title,
          description: value.description,
          price: value.price,
        },
      }),
      invalidatesTags: ['Article'],
    }),
    editArticleImg: builder.mutation<
      IArticle[],
      { id: number; file: FormData }
    >({
      query: (value) => ({
        url: `ads/${value.id}/image`,
        method: 'POST',
        body: value.file,
      }),
      invalidatesTags: ['Article'],
    }),
  }),
})

export const {
  useGetArticleDataQuery,
  useGetUserArticlesQuery,
  useCreateArticleMutation,
  useDeleteArticleMutation,
  useGetArticleDataCommentsQuery,
  useEditArticleMutation,
  useEditArticleImgMutation,
} = articleList
