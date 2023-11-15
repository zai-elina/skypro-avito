import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../types'

interface IUserSliceInitial {
  user: IUser
  userList: IUser[]
  errorLogin: { status: number; data: { detail: string } }
}

const initialState: IUserSliceInitial = {
  user: {} as IUser,
  userList: [],
  errorLogin: {} as { status: number; data: { detail: string } },
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
