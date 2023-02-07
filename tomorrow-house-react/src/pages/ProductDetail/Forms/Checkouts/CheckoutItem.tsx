import React, { ChangeEvent } from 'react'
import { useFormCheckouts } from 'src/hooks/useFormCheckouts'
import { StyledCheckoutItem } from './styles'
import { setCheckout } from 'src/app/product/checkout'
import { useAppDispatch } from 'src/hooks'
import { CloseIcon, CartIcon } from 'src/assets/icons'
import { Price } from 'src/components/Price/Price'

interface CheckoutItemProps {
  id: string
  optionId: string
  count: number
}

export const CheckoutItem: React.FC<CheckoutItemProps> = ({
  id,
  optionId,
  count,
}) => {
  const dispatch = useAppDispatch()

  const { getOptionDetail } = useFormCheckouts()
  const { label, sellingCost } = getOptionDetail(Number(optionId))!
  const sumCost = sellingCost * count

  const selectId = `${id}-${optionId}-checkout-select`

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget
    dispatch(setCheckout([Number(optionId), Number(value)]))
  }

  return (
    <StyledCheckoutItem>
      <header>
        <h4>{label}</h4>
      </header>
      <button
        className="delete"
        type="button"
        aria-label="해당 상품을 삭제하기"
      >
        <CloseIcon />
      </button>

      <footer className="checkout-footer">
        <div className="checkout-select">
          <select id={selectId} onChange={handleSelect}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <CartIcon />
        </div>

        <output className="checkout-output" htmlFor={selectId}>
          <Price size={16} amount={sumCost} />
        </output>
      </footer>
    </StyledCheckoutItem>
  )
}
