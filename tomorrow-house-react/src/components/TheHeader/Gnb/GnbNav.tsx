import React from 'react'
import { NavLink } from 'react-router-dom'
import type { Location } from 'history'

import { getGnbMenuName, getPageUrl, isIndexPage } from '../../utils'

import { StyledGnbNav } from './styles'
import urlMap from '../../navMap.json'

export const GnbNav = () => {
  const urlList = Object.keys(urlMap)

  return (
    <StyledGnbNav className="gnb-nav">
      <h2 className="visuallyHidden">메뉴</h2>

      <ul className="gnb-nav-list">
        {urlList.map((url) => {
          const isActive = isIndexPage(url, 'index')
            ? (_: any, location: Location) => {
                return (
                  location.pathname === '/' ||
                  location.pathname.startsWith('/community')
                )
              }
            : undefined

          return (
            <li className="gnb-nav-item" key={`gnb-nav-item-${url}`}>
              <NavLink to={getPageUrl(url)}>{getGnbMenuName(url)}</NavLink>
            </li>
          )
        })}
      </ul>
    </StyledGnbNav>
  )
}
