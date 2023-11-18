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
      providesTags: (result) =>
        Array.isArray(result)
          ? [
              ...result.map(({ id }) => ({
                type: 'Reviews' as const,
                id,
              })),
              'Reviews',
            ]
          : ['Reviews'],
    }),
    getUserArticles: builder.query<IArticle[], unknown>({
      query: () => ({ url: `ads/me` }),
      providesTags: (result) =>
        Array.isArray(result)
          ? [
              ...result.map(({ id }) => ({
                type: 'MyArticles' as const,
                id,
              })),
              'MyArticles',
            ]
          : ['MyArticles'],
    }),
    deleteArticle: builder.mutation<IArticle[], number>({
      query: (id) => ({
        url: `ads/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['ArticleList', 'MyArticles'],
    }),
    createArticle: builder.mutation<IArticle[], IArticleForm>({
      query: (value) => {
        const { title, description, price, images } = value
        const params = new URLSearchParams()

        params.append('title', title)
        if (description) {
          params.append('description', description)
        }

        if (price) {
          params.append('price', price.toString())
        }

        const queryString = params.toString()

        const formData = new FormData()

        if (images) {
          images.forEach((file: File | null) => {
            if (file) {
              formData.append('files', file, file.name)
            }
          })
        }
        return {
          url: `/ads?${queryString}`,
          method: 'POST',
          body: formData,
        }
      },
      invalidatesTags: ['MyArticles', 'ArticleList'],
    }),
    editArticleText: builder.mutation<IArticle[], IArticleForm>({
      query: (value) => ({
        url: `ads/${value.id}`,
        method: 'PATCH',
        body: {
          title: value.title,
          description: value.description,
          price: value.price,
        },
      }),
      invalidatesTags: ['Article', 'ArticleList', 'MyArticles'],
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
      invalidatesTags: ['Article', 'ArticleList', 'MyArticles'],
    }),
    deleteArticleImg: builder.mutation<
      IArticle[],
      { id: number; file_url: string }
    >({
      query: (value) => ({
        url: `ads/${value.id}/image?file_url=${value.file_url}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Article'],
    }),
    addReview: builder.mutation<IArticle[], { id: number; text: string }>({
      query: (value) => ({
        url: `ads/${value.id}/comments`,
        method: 'POST',
        body: { text: value.text },
      }),
      invalidatesTags: ['Article', 'Reviews'],
    }),
  }),
})

export const {
  useGetArticleDataQuery,
  useGetUserArticlesQuery,
  useDeleteArticleMutation,
  useGetArticleDataCommentsQuery,
  useCreateArticleMutation,
  useEditArticleTextMutation,
  useEditArticleImgMutation,
  useAddReviewMutation,
  useDeleteArticleImgMutation,
} = articleList
