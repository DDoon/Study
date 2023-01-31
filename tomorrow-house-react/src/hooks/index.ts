import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from 'src/app/store'

export { useResponsive } from '../hooks/useResponsive'
export { useModal } from '../hooks/useModal'

export const useAppDispatch = () => useDispatch<AppDispatch>()
