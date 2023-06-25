import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {TUserRegister} from '../../hooks/useForm'
import {registerUserRequestApi} from '../../api'
import {setCookie} from '../../utils/utils'
import {setUserData} from './userSlice'

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
  username: string
  email: string
  password: string
  confirmPassword: string
}

export const registerUser = createAsyncThunk(
  'registration/register',
  async (
    {username, email, password, confirmPassword}: TUserRegister,
    {dispatch, rejectWithValue}
  ) => {
    try {
      const response = registerUserRequestApi({
        username,
        email,
        password,
        confirmPassword,
      })
      console.log(response)
      dispatch(setUserData(response))
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
