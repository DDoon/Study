import React, { MouseEvent } from 'react'
import { ChevronIcon } from 'src/assets/icons'
import { StyledIconButton, StyledProductSectionHeader } from './styles'

type ProductSectionHeaderButtonType = 'icon' | 'text'

interface ProductSectionHeaderProps {
  title: string
  buttonLabel?: string
  buttonType?: ProductSectionHeaderButtonType
  count?: number
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export const ProductSectionHeader: React.FC<ProductSectionHeaderProps> = ({
  title,
  buttonLabel,
  buttonType,
  count,
  onClick,
}) => {
  return (
    <StyledProductSectionHeader>
      <h1>{title}</h1>
      {typeof count === 'number' && (
        <strong className="badge" aria-label={`${count}개`}>
          {count}
        </strong>
      )}

      {buttonType === 'icon' && (
        <StyledIconButton
          className="icon-button is-right"
          type="button"
          aria-label={buttonLabel}
          onClick={onClick}
        >
          <ChevronIcon />
        </StyledIconButton>
      )}

      {buttonType === 'text' && (
        <StyledIconButton
          className="text-button"
          type="button"
          onClick={onClick}
        >
          {buttonLabel}
        </StyledIconButton>
      )}
    </StyledProductSectionHeader>
  )
}
