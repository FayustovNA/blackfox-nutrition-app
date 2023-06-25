import {combineReducers} from 'redux'
import userSlice from './slices/userSlice'
import registerSlice from './slices/registerSlice'

export const rootReducer = combineReducers({
  userData: userSlice,
  register: registerSlice,
})

export type RootState = ReturnType<typeof rootReducer>
