import React from 'react'
import { TheFooter } from 'src/components/TheFooter/TheFooter'
import { TheHeader } from 'src/components/TheHeader/TheHeader'
import { Modal } from 'src/components/Modal/Modal'
import { Toast } from 'src/components/Toast/Toast'
import { getModals } from 'src/app/modal'
import { useAppSelector } from 'src/hooks'
import { getToasts } from 'src/app/toasts'

function App() {
  const modals = useAppSelector(getModals)
  const toasts = useAppSelector(getToasts)

  return (
    <>
      <TheHeader />
      {modals.length > 0 && <Modal />}
      {toasts.length > 0 && <Toast />}
      <TheFooter />
    </>
  )
}

export default App
