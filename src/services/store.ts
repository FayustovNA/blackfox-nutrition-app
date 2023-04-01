import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { rootReducer } from './root-reducer'

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})

export type AppDispatch = typeof store.dispatch
