import { useAppDispatch } from '.'
import { deleteModal, setModal } from 'src/app/modal'
import type { ModalCategory } from 'src/types/enum'

export const useModal = () => {
  const dispatch = useAppDispatch()

  const addModal = (modal: Modal) => {
    dispatch(setModal(modal))
  }

  const removeModal = (category?: ModalCategory) => {
    dispatch(deleteModal(category))
  }

  return {
    addModal,
    removeModal,
  } as const
}
