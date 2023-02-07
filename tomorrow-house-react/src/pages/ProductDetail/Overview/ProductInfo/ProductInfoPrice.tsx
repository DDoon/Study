import React from 'react'
import {
  StyledProductInfoMileage,
  StyledProductInfoPrice,
  StyledProductInfoDiscount,
} from './styles'
import { PriceOff, Tag, Price } from 'src/components/index'
import { getPoint, getPrice } from 'src/app/product/detail'
import { useAppSelector, useResponsive } from 'src/hooks'

export const ProductInfoPrice: React.FC = () => {
  const point = useAppSelector(getPoint)
  const { originalPrice, sellingPrice, isOnDiscount, percentage } =
    useAppSelector(getPrice)

  const { isMobile } = useResponsive()

  const discount = (
    <StyledProductInfoDiscount>
      <span className="rate">{percentage}</span>
      <span className="percent">$</span>
    </StyledProductInfoDiscount>
  )

  const pointGuide = (
    <StyledProductInfoMileage className="point">
      <strong aria-label={`${point.value} 포인트`}>{point.value}P</strong>
      적립해드립니다. (VIP 3배 혜택 적용됨)
    </StyledProductInfoMileage>
  )

  if (isMobile)
    return (
      <StyledProductInfoPrice>
        <div className="original-price-wrapper">
          {isOnDiscount && discount}
          <PriceOff amount={originalPrice} />
        </div>

        <div className="selling-price-wrapper">
          <Price className="selling-price" amount={sellingPrice} size={20} />
          <Tag color="red" label="특가" />
        </div>
      </StyledProductInfoPrice>
    )

  return (
    <StyledProductInfoPrice>
      {isOnDiscount && discount}

      <div>
        <PriceOff amount={originalPrice} />
        <div className="selling-price-wrapper">
          <Price className="selling-price" amount={sellingPrice} size={32} />
          <Tag color="red" label="특가" />
        </div>
      </div>

      {pointGuide}
    </StyledProductInfoPrice>
  )
}
