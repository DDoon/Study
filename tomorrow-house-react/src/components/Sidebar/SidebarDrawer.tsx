import React from 'react'
// import {
//   ChevronIcon,
//   CommunityIcon,
//   ExpertIcon,
//   StoreIcon,
// } from 'src/assets/icons'
import classNames from 'classnames'
import { StyledSidebarDrawer } from 'src/components/Sidebar/styles'
import { getGnbMenuName, getPageUrl } from 'src/components/utils'
import { NavLink } from 'react-router-dom'

interface SidebarDrawerProps {
  category: string
  urlMap: Record<string, string>
  closeSidebar?: () => void
}

export const SidebarDrawer: React.FC<SidebarDrawerProps> = ({
  category,
  urlMap,
  closeSidebar,
}) => {
  const label = getGnbMenuName(category)
  let icon: React.SVGProps<SVGSVGElement>
  // switch (category) {
  //   case 'community':
  //     icon = <CommunityIcon />
  //     break
  //   case 'store':
  //     icon = <StoreIcon />
  //     break
  //   case 'expert':
  //     icon = <ExpertIcon />
  //     break
  //   default:
  //     icon = <CommunityIcon />
  //     break
  // }

  return (
    <StyledSidebarDrawer className={classNames('drawer-menu', category)}>
      <button className="drawer-menu-button" type="button">
        <>
          {/* {icon} */}
          {label}
        </>

        {/* <ChevronIcon className="chevron" /> */}
      </button>

      <div>
        <ul>
          {Object.entries(urlMap).map(([url, label]) => (
            <li key={`drawer-menu-item-${url}`}>
              <NavLink to={getPageUrl(category, url)}>{label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </StyledSidebarDrawer>
  )
}