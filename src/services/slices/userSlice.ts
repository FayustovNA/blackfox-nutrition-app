import { createSlice } from '@reduxjs/toolkit'

export type TGetUserInfo = {
  id: number
  email: string
  username: string
}

interface IUserSliceState {
  isLoggedIn: boolean
  loginRequest: boolean
  loginFailed: boolean
  loginError: boolean
  username: string
  email: string
  password: string
}

const initialState: IUserSliceState = {
  username: '',
  email: '',
  password: '',
  loginRequest: false,
  loginFailed: false,
  isLoggedIn: false,
  loginError: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      Object.assign(state, {
        username: action.payload.username,
        email: action.payload.email,
        isLoggedIn: true,
      })
    },
    logoutUser: (state) => {
      Object.assign(state, {
        loginRequest: false,
        loginFailed: false,
        isLoggedIn: false,
        loginError: false,
      })
    },
    loginUser: (state, action) => {
      Object.assign(state, {
        username: action.payload.username,
        email: action.payload.email,
        isLoggedIn: true,
      })
    },
  },
})

export default userSlice.reducer
export const { setUserData, logoutUser, loginUser } = userSlice.actions
