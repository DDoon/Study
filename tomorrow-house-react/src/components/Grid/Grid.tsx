import React from 'react'
import { Row, RowProps } from './Row'
import { ColumnProps, Column } from './Column'
import { Container } from './Container'

type GridProps = ColumnProps & RowProps

export const Grid: React.FC<GridProps> = ({
  sm,
  md,
  lg,
  alignItems,
  justifyContent,
  children,
  className,
}) => {
  return (
    <Container className={className}>
      <Row alignItems={alignItems} justifyContent={justifyContent}>
        <Column sm={sm} md={md} lg={lg}>
          {children}
        </Column>
      </Row>
    </Container>
  )
}
