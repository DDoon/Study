import React from 'react'
import { CheckoutItem } from 'src/pages/ProductDetail/Forms/Checkouts/CheckoutItem'
import { getCheckoutItems } from 'src/app/product/checkout'
import { useAppSelector } from 'src/hooks'

interface CheckoutsProps {
  id: string
}

export const Checkouts: React.FC<CheckoutsProps> = ({ id }) => {
  const checkouts = useAppSelector(getCheckoutItems)
  return (
    <ol>
      {Object.entries(checkouts).map(([optionId, count]) => {
        const key = `${id}-checkout-item-${optionId}`
        return (
          <li key={key}>
            <CheckoutItem id={id} optionId={optionId} count={count} />
          </li>
        )
      })}
    </ol>
  )
}
