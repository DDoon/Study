import React, { forwardRef, RefObject, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { StyledButton } from '../Button/styles'

export type ButtonSize = 32 | 40 | 48 | 55
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outlined'

interface ButtonProps {
  variant: ButtonVariant
  children?: ReactNode
  className?: string
  disabled?: boolean
  size?: ButtonSize
  to?: string
  type?: 'button' | 'submit' | 'reset'
  onBlur?: () => void
  onClick?: () => void
  onFocus?: () => void
}

type ButtonElement = HTMLButtonElement | HTMLAnchorElement

export const Button = forwardRef<ButtonElement, ButtonProps>(
  (
    {
      variant,
      size = 40,
      className,
      disabled,
      to,
      type = 'button',
      onBlur,
      onClick,
      onFocus,
      children,
    },
    ref
  ) => {
    if (to) {
      return (
        <StyledButton
          ref={ref as RefObject<HTMLAnchorElement>}
          className={className}
          variant={variant}
          size={size}
          as={Link}
          to={to}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          {children}
        </StyledButton>
      )
    }

    return (
      <StyledButton
        ref={ref as RefObject<HTMLButtonElement>}
        className={className}
        variant={variant}
        size={size}
        type={type}
        disabled={disabled}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {children}
      </StyledButton>
    )
  }
)
