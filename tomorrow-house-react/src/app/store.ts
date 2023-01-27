import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import searchHistory from './searchHistory'

export const store = configureStore({
  reducer: {
    searchHistory,
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
