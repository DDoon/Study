import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import modal from './modal'

export const store = configureStore({
  reducer: {
    modal,
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
