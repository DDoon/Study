import React from 'react'
import { Sidebar } from 'src/components/Sidebar/Sidebar'
import { ModalCategory } from 'src/types/enum'
import { ModalSearch } from './ModalSearch'

interface ModalViewProps {
  modal: Modal
}

export const ModalView: React.FC<ModalViewProps> = ({ modal }) => {
  const { category, props } = modal

  switch (category) {
    case ModalCategory.SidebarModal:
      return <Sidebar {...props} />
    case ModalCategory.SearchModal:
      return <ModalSearch {...props} />
    default:
      return null
  }
}
