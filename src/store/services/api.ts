import {
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { hostDomain } from '../../constants'
import { IArticle } from '../../types'
import {
  BaseQueryApi,
  QueryReturnValue,
} from '@reduxjs/toolkit/dist/query/baseQueryTypes'

const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {},
): Promise<any> => {
  const baseQuery = fetchBaseQuery({
    baseUrl: `${hostDomain}`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('access_token')

      if (token) {
        headers.set('authorization', 'Bearer ' + token)
      }
      return headers
    },
  })
  const result = await baseQuery(args, api, extraOptions)

  if (result?.error?.status !== 401) {
    return result
  }

  const forceLogout = () => {
    localStorage.clear()
    window.location.href = '/login'
  }

  const token = localStorage.getItem('access_token')

  const refreshToken = localStorage.getItem('refresh_token')

  if (!token) {
    return forceLogout()
  }

  const refreshResult: QueryReturnValue<
    any,
    FetchBaseQueryError,
    FetchBaseQueryMeta
  > = await baseQuery(
    {
      url: 'auth/login',
      method: 'PUT',
      body: {
        access_token: token,
        refresh_token: refreshToken,
      },
    },
    api,
    extraOptions,
  )

  if (refreshResult?.error?.status === 422) {
    return forceLogout()
  }

  if (refreshResult.data) {
    const newToken = refreshResult.data.access_token
    const newRefresh = refreshResult.data.refresh_token
    localStorage.setItem('access_token', newToken)
    localStorage.setItem('refresh_token', newRefresh)
  }

  const retryResult = await baseQuery(args, api, extraOptions)

  if (retryResult?.error?.status === 401) {
    return forceLogout()
  }
  return retryResult
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['ArticleList', 'Article', 'Profile', 'Reviews'],
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
