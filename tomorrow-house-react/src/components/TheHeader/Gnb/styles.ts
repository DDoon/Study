import styled from 'styled-components'

import {
  flexbox,
  positionCenter,
  stripPx,
  media,
  inlineFlexbox,
  textStyle,
  positionCenterX,
} from 'src/styles/utils'

const GNB_ICON_BUTTON_BADGE = `16px`
const GNB_NAV_PADDING = `8px`
const GNB_USER_MENU_BUTTON_SIZE = `32px`
const GNB_USER_MENU_TOOLTIP_SIZE = `12px`
export const GNB_HEIGHT_SM = `50px`
export const GNB_HEIGHT_LG = `80px`

export const StyledGnb = styled.div`
  width: 100%;
  height: ${GNB_HEIGHT_SM};
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  .gnb-wrapper {
    ${flexbox('between')};
    position: relative;
    width: 100%;
    height: ${GNB_HEIGHT_SM};
  }

  .gnb-left {
    .logo {
      ${positionCenter()}
    }

    a {
      display: block;
    }

    svg {
      display: block;
      width: auto;
      height: 20px;
    }
  }

  .gnb-right {
    .button-group {
      ${flexbox('end')};
    }
  }

  ${media.greaterThan('tablet')`
    height: ${GNB_HEIGHT_LG};

    .gnb-wrapper {
      height: ${GNB_HEIGHT_LG};
    }
    
    .gnb-left {
      ${flexbox('start')};

      .logo {
        position: static;
        padding-right: 32px;
        transfrom: none;

        svg {
          height: 24px;
        }
      }
    }

    .gnb-right {
      ${flexbox('end')};

      .button-group {
        margin-right: 24px;
      }

      .gnb-icon-button {
        margin-right: 8px;
      }
    }
  `}
`

export const StyledGnbNav = styled.nav`
  .gnb-nav-list {
    ${flexbox('start')};
    position: relative;
    right: ${GNB_NAV_PADDING};
  }

  .gnb-nav-item {
    margin-right: ${24 - stripPx(GNB_NAV_PADDING) * 2}px;

    &:hover {
      a {
        color: ${({ theme }) => theme.colors.blue};
      }
    }

    &:last-child {
      margin-right: 0;
    }

    a {
      ${textStyle('md')};
      display: block;
      padding: ${GNB_NAV_PADDING};
      font-weight: 700;
      white-space: nowrap;
      color: ${({ theme }) => theme.colors.primary};

      &.active {
        color: ${({ theme }) => theme.colors.blue};
      }
    }
  }
`

export const StyledGnbSearch = styled.div`
  position: relative;
  margin-right: 24px;

  .gnb-search-history {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    display: none;
    width: 100%:
    padding: 16px 8px 8px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 4px;
    box-shadow: ${({ theme }) => theme.boxShadows.dropdown};
    
    &.open {
      display: block;
    }

    .seacrh-history-header {
      padding: 0 8px;
    }
  }
`

export const StyledGnbIconButton = styled.button`
  ${flexbox()};
  position: relative;
  flex-grow: 0;
  flex-shirnk: 0;
  width: 32px;
  height: 32px;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.secondary};
  border-radisus:50%;
  transition: color 200ms ease-in-out, background-color 200ms ease-in-out;

  &.menu {
    color: ${({ theme }) => theme.colors.blue};
    
    &:active {
      color: ${({ theme }) => theme.colors.blueDark};
    }
  }
 
  
  &.cart {
    svg {
      position: relative;
      top:1px;
      right:1px;
    }
  }

  &:active {
    color: ${({ theme }) => theme.colors.primary};
  }

  .badge {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    height: ${GNB_ICON_BUTTON_BADGE};
    min-width: ${GNB_ICON_BUTTON_BADGE};
    padding: 0 4px;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    backgroud-color: ${({ theme }) => theme.colors.red};
    border-radius: ${stripPx(GNB_ICON_BUTTON_BADGE) / 2}px;
  }

  ${media.greaterThan('tablet')`
    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.blue};
    }
  `}
`

export const StyledGnbUserAuth = styled.div`
  ${flexbox()};
  margin-right: -6px;

  button {
    ${inlineFlexbox()};
    ${textStyle('sm')};
    padding: 4px 6px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
  }
`

export const StyledGnbUserMenu = styled.div`
  position: relative;

  &.active {
    .gnb-user-menu-button {
      border-color: ${({ theme }) => theme.colors.blue};
    }

    .gnb-user-menu-content {
      opacity: 1;
      visibility: visible;
      transform: translate3d(-50%, 0, 0);
    }
  }

  .gnb-user-menu-button {
    width: ${GNB_USER_MENU_BUTTON_SIZE};
    height: ${GNB_USER_MENU_BUTTON_SIZE};
    overflow: hidden;
    border: 3px solid ${({ theme }) => theme.colors.white};
    border--radius: 50%;
    transition: border-color 200ms ease-in-out;

    &:hover {
      border-color: ${({ theme }) => theme.colors.blue};
    }

    img {
      display: block;
      width: 100%:
      height: 100%;
      object-fit: cover;
    }
  }

  .gnb-user-menu-content{
    ${positionCenterX()}
    top: ${
      stripPx(GNB_USER_MENU_BUTTON_SIZE) +
      stripPx(GNB_USER_MENU_TOOLTIP_SIZE) +
      8
    }px;
    border-radius:4px;
    opacity:0;
    visibility: hidden;
    transform: translate3d(-50%, -10px 0);
    box-shadow: ${({ theme }) => theme.boxShadows.dropdown};
    transition: opacity 200ms ease-in-out, transform 200ms ease-in-out, visibility 200ms ease-in-out;

    &::before,
    &::after {
      ${positionCenterX()}
      top: ${stripPx(GNB_USER_MENU_TOOLTIP_SIZE) * -2}px;
      display: block;
      width: 0;
      height: 0;
      border-top: ${GNB_USER_MENU_TOOLTIP_SIZE} solid transparent;
      border-right: 10px solid transparent;
      border-bottom: ${GNB_USER_MENU_TOOLTIP_SIZE} solid transparent;
      border-left: 10px solid transparent;
      content:'';
    }

    &::before {
      border-bottom-color: ${({ theme }) => theme.colors.border};
    }

    &::after {
      top: ${stripPx(GNB_USER_MENU_TOOLTIP_SIZE) * -2 + 2}px
      border-bottom-color: ${({ theme }) => theme.colors.white};
    }

    ul {
      width: 200px;
      height: 8px;
      background-color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius:4px;
    }

    li {
      a,
      button {
        ${flexbox('start')};
        ${textStyle('base')};
        width:100%;
        height:44px;
        padding: 0 8px;
        border-radius: 2px;
        color: ${({ theme }) => theme.colors.primary};
        
        &:hover {
          background-color: ${({ theme }) => theme.colors.background};
        }
      }
    }
  }
`
