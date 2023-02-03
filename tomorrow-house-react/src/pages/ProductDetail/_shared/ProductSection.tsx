import React, { ReactNode } from 'react'
import { Container, Column, Row } from 'src/components'
import { StyledProductSection, StyledProductSectionDivider } from './styles'
import { useResponsive } from 'src/hooks'

interface ProductSectionProps {
  id: string
  className?: string
  children?: ReactNode
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  id,
  className,
  children,
}) => {
  const { isMobile } = useResponsive()

  return (
    <Container>
      <Row>
        <Column sm={4} lg={8}>
          <StyledProductSection className={className} id={id} role="tabpanel">
            {children}
          </StyledProductSection>
          {isMobile && <StyledProductSectionDivider />}
        </Column>
      </Row>
    </Container>
  )
}
