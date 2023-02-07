import React, { useState } from 'react'
import {
  ProductSection,
  ProductSectionContent,
  ProductSectionHeader,
} from './_shared'
import { getProductImages } from 'src/app/product/detail'
import { useAppSelector, useResponsive } from 'src/hooks'
import { StyledProductDetailSpec } from './styles'
import { Button } from 'src/components/Button/Button'
import classNames from 'classnames'

export const ProductSpec: React.FC = () => {
  const imageUrls = useAppSelector(getProductImages)

  const { isMobile } = useResponsive()

  const [showAll, setShowAll] = useState(false)

  const handleShowAll = () => {
    if (!isMobile) return
    setShowAll(true)
  }

  return (
    <ProductSection id="product-spec">
      <ProductSectionHeader title="상품 정보" />
      <ProductSectionContent>
        <StyledProductDetailSpec
          className={classNames({ showAll: isMobile && showAll })}
        >
          {imageUrls.map((url) => {
            const key = `product-spec-${url}`
            return (
              <figure key={key}>
                <img src={url} alt="" />
              </figure>
            )
          })}

          {isMobile && !showAll && (
            <div className="button-group">
              <Button variant="primary" size={55} onClick={handleShowAll}>
                펼치기
              </Button>
            </div>
          )}
        </StyledProductDetailSpec>
      </ProductSectionContent>
    </ProductSection>
  )
}
