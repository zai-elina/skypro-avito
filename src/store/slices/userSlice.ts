import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../types'

interface IUserSliceInitial {
  userToken: string
  user: IUser
  userList: IUser[]
  errorLogin: { status: number; data: { detail: string } }
}

const initialState: IUserSliceInitial = {
  userToken: '',
  user: {} as IUser,
  userList: [],
  errorLogin: {} as { status: number; data: { detail: string } },
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setUserToken: (state, action) => {
      state.userToken = action.payload
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

export const { setUser, logOutUser, setUserList, setError, setUserToken } =
  userSlice.actions

export default userSlice.reducer
