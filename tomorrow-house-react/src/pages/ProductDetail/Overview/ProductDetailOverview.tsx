import React from 'react'
import { Column, Row, Breadcrumb, Container } from 'src/components'
import { ProductInfo } from './ProductInfo/ProductInfo'
import { ProductCarousel } from './ProductCarousel/ProductCarousel'
import { getBreadcrumbLinks } from 'src/app/product/detail'
import { useAppSelector } from 'src/hooks'

export const ProductDetailOverview: React.FC = () => {
  const breadcrumbLinks = useAppSelector(getBreadcrumbLinks)

  return (
    <Container>
      <Row>
        <Column sm={4}>
          <Breadcrumb id="product-detail-breadcrumb" links={breadcrumbLinks} />
        </Column>
        <Column sm={4} md={6} lg={7}>
          <ProductCarousel />
        </Column>
        <Column sm={4} md={6} lg={5}>
          <ProductInfo />
        </Column>
      </Row>
    </Container>
  )
}
