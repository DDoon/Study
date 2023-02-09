import React, { ComponentType } from 'react'
import { BrowserRouter, Route, RouteProps } from 'react-router-dom'
import { Modal } from 'src/components/Modal/Modal'
import { getModals } from 'src/app/modal'
import { useAppSelector } from 'src/hooks'
import { TheFooter } from 'src/components/TheFooter/TheFooter'
import { ProductDetailPage } from 'src/pages/ProductDetail/ProductDetailPage'
import { TheHeader } from 'src/components/TheHeader/TheHeader'

const Routes: React.FC = () => {
  const modals = useAppSelector(getModals)

  return (
    <BrowserRouter>
      <div className="app">
        <TheHeader />
        {modals.length > 0 && <Modal />}

        <TheFooter />
      </div>
    </BrowserRouter>
  )
}

export default Routes
