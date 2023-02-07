import React from 'react'
import { StyledProductInfoHeader } from './styles'
import { useAppSelector } from 'src/hooks'
import { Link } from 'react-router-dom'
import { StarRating } from 'src/components'

export const ProductInfoHeader: React.FC = () => {
  const { brand, name, reviewAvg, reviewCount } = useAppSelector(
    (state) => state.productDetail
  )

  return (
    <StyledProductInfoHeader>
      <Link className="bran" to={`/seller/${brand.id}`}>
        {brand.name}
      </Link>
      <h1 className="title">{name}</h1>

      <div className="review">
        <StarRating
          id="product-info-header"
          rating={reviewAvg}
          size={13}
          tabletSize={16}
        />
      </div>

      <p>
        <strong>{reviewCount}</strong>
        <span className="sm-hidden">개 리뷰</span>
      </p>
    </StyledProductInfoHeader>
  )
}
