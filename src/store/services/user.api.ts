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
    }),
  }),
})

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetUserQuery,
} = userApi
