import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../types'

interface IUserSliceInitial {
  user: IUser
  userList: IUser[]
}

const initialState: IUserSliceInitial = {
  user: {} as IUser,
  userList: [],
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
  },
})

export const { setUser, logOutUser, setUserList } = userSlice.actions

export default userSlice.reducer
