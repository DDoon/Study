import {
  flexbox,
  inlineFlexbox,
  media,
  positionCenterY,
  textStyle,
} from 'src/styles/utils'
import styled from 'styled-components'

export const StyledCheckoutItem = styled.div`
  position: relative;
  padding: 8px 10px 8px 12px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 4px;

  .checkout-header {
    margin-bottom: 8px;
  }

  .checkout-title {
    ${textStyle('xs')};
    padding-right: 26px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
  }

  .delete {
    ${inlineFlexbox()};
    position: absolute;
    top: 8px;
    right: 8px;
    width: 20px;
    height: 20px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.secondary};

    &:hover,
    &:active {
      opacity: 0.4;
    }
  }

  .checkou-select {
    position: relative;
    display: inline-block;

    &:hover {
      select {
        border-color: ${({ theme }) => theme.colors.tertiary};
      }

      i {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }

    select {
      ${textStyle('sm')};
      width: 72px;
      height: 24px;
      padding: 0 8px;
      line-height: 1;
      color: ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: 3px;
      transition: border-color 100ms ease-in-out;
      appearance: none;
    }

    svg {
      ${positionCenterY()};
      right: 2px;
      font-size: 20px;
      color: ${({ theme }) => theme.colors.tertiary};
      pointer-events: none;
      transition: color 100ms ease-in-out;
    }
  }

  .checkout-footer {
    ${flexbox('between')};
  }

  ${media.greaterThan('tablet')`
    .checkout-title {
      ${textStyle('base')};
    }
  `}
`
