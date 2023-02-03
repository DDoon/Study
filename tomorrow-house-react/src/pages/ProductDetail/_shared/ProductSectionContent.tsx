import React, { ReactNode } from 'react'
import { StyledProductSectionContent } from './styles'

interface ProductSectionConentProps {
  children?: ReactNode
}

export const ProductSectionContent: React.FC<ProductSectionConentProps> = ({
  children,
}) => {
  return <StyledProductSectionContent>{children}</StyledProductSectionContent>
}
