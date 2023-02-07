import React, { useEffect } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from 'src/app/store'

export { useResponsive } from '../hooks/useResponsive'
export { useModal } from '../hooks/useModal'
export { useRouter } from '../hooks/useRouter'
export { usePrevious } from '../hooks/usePrevious'
export { useToast } from '../hooks/useToast'
export { useClickOutside } from '../hooks/useClickOutside'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useMount = (callback: React.EffectCallback) => {
  useEffect(callback)
}

export const useUnmount = (callback: () => void) => {
  useEffect(() => {
    return callback
  })
}
