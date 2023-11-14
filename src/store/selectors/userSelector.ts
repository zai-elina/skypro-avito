import { IUser } from '../../types'
import { RootState } from '../store'

export const selectUser = (state: RootState) => state.user.user

export const selectUserSeller = (id: number) => (state: RootState) => {
  return state.user.userList.find((user: IUser) => user.id === id)
}
