import React, { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { ToastView } from 'src/components/Toast/ToastView'
import { getToasts } from 'src/app/toasts'
import { useAppSelector } from 'src/hooks'

interface ToastPortalProps {
  children: ReactNode
}

const ToastPortal = ({ children }: ToastPortalProps) =>
  createPortal(children, document.getElementById('toast')!)

export const Toast = () => {
  const toasts = useAppSelector(getToasts)

  if (!toasts.length) return null

  return (
    <ToastPortal>
      <div>
        {toasts.map((toast, index) => {
          const key = `toast-${toast.category}-${index}`
          return <ToastView key={key} toast={toast} />
        })}
      </div>
    </ToastPortal>
  )
}
