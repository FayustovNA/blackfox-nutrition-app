import {
  TypedUseSelectorHook,
  useSelector as selectorHook,
  useDispatch as dispatchHook,
} from 'react-redux'
import { RootState } from './root-reducer'

import { AppDispatch } from './store'
import type {} from 'redux-thunk/extend-redux'

type DispatchFunc = () => AppDispatch
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook
export const useDispatch: DispatchFunc = dispatchHook
