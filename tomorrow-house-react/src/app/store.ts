import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import modal from './modal'
import toast from './toasts'
import searchHistory from './searchHistory'
import productDetail from './product/detail'
import productCheckout from './product/checkout'
import auth from './auth'

export const store = configureStore({
  reducer: {
    modal,
    toast,
    productDetail,
    productCheckout,
    searchHistory,
    auth,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
