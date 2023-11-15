import { IAuthResponse, IFormFieldsRegister, IUser } from '../../types'
import { api } from './api'

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<IUser, IFormFieldsRegister>({
      query: (value) => {
        return {
          url: `auth/register`,
          method: 'POST',
          body: {
            password: value.password,
            role: 'user',
            email: value.email,
            name: value.name,
            surname: value.surname,
            city: value.city,
          },
        }
      },
    }),
    loginUser: builder.mutation<IAuthResponse, IFormFieldsRegister>({
      query: (value) => {
        return {
          url: `auth/login`,
          method: 'POST',
          body: {
            email: value.email,
            password: value.password,
          },
        }
      },
    }),
    getUser: builder.query<IUser, unknown>({
      query: () => `user`,
      providesTags: (result) =>
        Array.isArray(result)
          ? [
              ...result.map(({ id }) => ({
                type: 'Profile' as const,
                id,
              })),
              'Profile',
            ]
          : ['Profile'],
    }),
    changeAvatar: builder.mutation<IUser, FormData>({
      query: (value) => ({
        url: `user/avatar`,
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Profile'],
    }),
    changeUserData: builder.mutation<
      IUser,
      Pick<IUser, 'name' | 'phone' | 'surname' | 'city'>
    >({
      query: (value) => ({
        url: `user`,
        method: 'PATCH',
        body: {
          phone: value.phone,
          name: value.name,
          surname: value.surname,
          city: value.city,
        },
      }),
      invalidatesTags: ['Profile'],
    }),
    getAllUsers: builder.query<IUser, unknown>({
      query: () => `user/all`,
    }),
  }),
})

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetUserQuery,
  useChangeAvatarMutation,
  useChangeUserDataMutation,
  useGetAllUsersQuery
} = userApi
