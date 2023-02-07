import React from 'react'
import { ProductInfoPrice } from './ProductInfoPrice'
import { ProductInfoHeader } from './ProductInfoHeader'
import { ProductInfoDelivery } from './ProductInfoDelivery'
import { StyledProductInfo } from './styles'
import { useResponsive } from 'src/hooks'
import { Controls, Checkouts } from '../../Forms'

export const ProductInfo: React.FC = () => {
  const { isDesktop } = useResponsive()

  return (
    <StyledProductInfo>
      <ProductInfoHeader />
      <ProductInfoPrice />
      <ProductInfoDelivery />
      {isDesktop && (
        <div className="product-info-form">
          <Controls id="product-info" />
          <Checkouts id="product-info" />
        </div>
      )}
    </StyledProductInfo>
  )
}
