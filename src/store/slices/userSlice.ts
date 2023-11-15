import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../types'

interface IUserSliceInitial {
  user: IUser
  userList: IUser[]
  errorLogin: string
}

const initialState: IUserSliceInitial = {
  user: {} as IUser,
  userList: [],
  errorLogin: '',
}

export const userSlice = createSlice({
  name: 'articlesSlice',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    logOutUser: (state, action) => {
      state.user = {} as IUser
    },
    setUserList: (state, action) => {
      state.userList = action.payload
    },
    setError: (state, action) => {
      state.errorLogin = action.payload
    },
  },
})

export const { setUser, logOutUser, setUserList, setError } = userSlice.actions

export default userSlice.reducer
