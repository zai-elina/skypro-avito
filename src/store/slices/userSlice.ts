import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../types'

interface IUserSliceInitial {
  user: IUser
}

const initialState: IUserSliceInitial = {
  user: {} as IUser,
}

export const userSlice = createSlice({
  name: 'articlesSlice',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
