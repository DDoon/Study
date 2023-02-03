import React from 'react'
import { StyledCheckoutItem } from './styles'

interface CheckoutItemProps {
  id: string,
  optionId: string,
  count: number
}


export const CheckoutItem: React.FC<CheckoutItemProps> = ({
  id,
  optionId,
  count,
}) => {
  

  return(
    <StyledCheckoutItem>
      <header>
        <h4>{label}</h4>
      </header>
    </StyledCheckoutItem>
    )
}
