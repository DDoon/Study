import React, { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { StyledOverlay } from 'src/components/Modal/styles'
import { ModalView } from 'src/components/Modal/ModalView'
import { getModals } from 'src/app/modal'
import { useModal, useAppSelector } from 'src/hooks'

interface ModalPortalProps {
  children: ReactNode
}

const ModalPortal = ({ children }: ModalPortalProps) =>
  createPortal(children, document.getElementById('modal')!)

export const Modal = () => {
  const modals = useAppSelector(getModals)

  const { removeModal } = useModal()

  if (!modals.length) return null

  const closeModal = () => removeModal()

  return (
    <ModalPortal>
      {modals.map((modal, index) => {
        const key = `modal-${modal.category}-${index}`
        return <ModalView key={key} modal={modal} />
      })}
      <StyledOverlay onClick={closeModal} />
    </ModalPortal>
  )
}
