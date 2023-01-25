import React, { ReactNode } from 'react'
import { StyledRow } from './styles'

export interface RowProps {
  children?: ReactNode
  className?: string
  alignItems?: string
  justifyContent?: string
}

export const Row: React.FC<RowProps> = ({
  children,
  className,
  alignItems,
  justifyContent,
}) => {
  return (
    <StyledRow
      className={className}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {children}
    </StyledRow>
  )
}
