import React from 'react'
import { TheFooter } from 'src/components/TheFooter/TheFooter'
import { TheHeader } from 'src/components/TheHeader/TheHeader'
import { Modal } from 'src/components/Modal/Modal'
import { getModals } from 'src/app/modal'
import { useAppSelector } from 'src/hooks'
import { Sidebar } from 'src/components/Sidebar/Sidebar'

function App() {
  const modals = useAppSelector(getModals)

  return (
    <>
      <TheHeader />
      {modals.length > 0 && <Modal />}
      <TheFooter />
    </>
  )
}

export default App
