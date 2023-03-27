import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { TUserRegister } from '../../hooks/useForm'
import { registerUserRequestApi } from '../../api'
import { setCookie } from '../../utils/utils'

export type TRegisterState = {
  registerRequest: boolean
  registerSuccess: boolean
  registerFailed: boolean
}

export const initialState: TRegisterState = {
  registerRequest: false,
  registerFailed: false,
  registerSuccess: false,
}

export type TRegisterUserResponse = {
  id: number
  email: string
  firstName: string
  lastName: string
  username: string
  password: string
  organization: string
  access: string
  refresh: string
}

export const registerUser = createAsyncThunk(
  'registration/register',
  async (
    { firstName, lastName, email, password, organization }: TUserRegister,
    { dispatch, rejectWithValue }
  ) => {
    try {
      const response = registerUserRequestApi({
        firstName,
        lastName,
        email,
        password,
        organization,
      })
      console.log(response)
      //   dispatch(setUserData(response))
    } catch (error) {
      //   dispatch(setError(CODES.SERVER_ERR))
      return rejectWithValue(error)
    }
  }
)

export const registerSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(registerUser.pending, (state) => {
      state.registerRequest = true
      state.registerSuccess = false
      state.registerFailed = false
    })
    builder.addCase(registerUser.fulfilled, (state) => {
      state.registerRequest = false
      state.registerSuccess = true
      state.registerFailed = false
    })
    builder.addCase(registerUser.rejected, (state) => {
      state.registerRequest = false
      state.registerSuccess = false
      state.registerFailed = true
    })
  },
})

export default registerSlice.reducer
