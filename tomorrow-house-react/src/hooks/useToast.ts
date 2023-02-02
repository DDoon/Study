import { ToastCategory } from 'src/types/enum'
import { deleteToast, setToast } from 'src/app/toasts'
import { useAppDispatch } from '.'

export const useToast = () => {
  const dispatch = useAppDispatch()

  const addToast = (Toast: Toast) => {
    dispatch(setToast(Toast))
  }

  const removeToast = (category?: ToastCategory) => {
    dispatch(deleteToast(category))
  }

  return {
    addToast,
    removeToast,
  } as const
}
