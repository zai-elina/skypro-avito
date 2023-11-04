import { IFormFieldsRegister, IUser } from '../../types'
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
  }),
})

export const { useRegisterUserMutation } = userApi
