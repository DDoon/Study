import React from 'react'
import { Modal } from 'src/components/Modal/Modal'
import { getModals } from 'src/app/modal'
import { useAppSelector } from 'src/hooks'
import { TheFooter } from 'src/components/TheFooter/TheFooter'
import { TheHeader } from 'src/components/TheHeader/TheHeader'

const Routes: React.FC = () => {
  const modals = useAppSelector(getModals)

  return (
    <div className="app">
      <TheHeader />

      {modals.length > 0 && <Modal />}
      <TheFooter />
    </div>
  )
}

export default Routes
