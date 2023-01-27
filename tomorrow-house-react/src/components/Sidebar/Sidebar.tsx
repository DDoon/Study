import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarUser } from 'src/components/Sidebar/SidebarUser'
// import { Logo } from 'src/assets/icons'
import { StyledSidebar } from 'src/components/Sidebar/styles'
import { SidebarDrawer } from 'src/components/Sidebar/SidebarDrawer'
import navMap from '../navMap.json'
// import { ReactComponent as Logo } from 'src/assets/icons/logo.svg'

export const Sidebar: React.FC = () => {
  return (
    <StyledSidebar className="sidebar">
      <header className="sidebar-header">
        <h1 className="logo">
          <Link to="/">
            {/* <Logo aria-label="내일의 집" /> */}
          </Link>
        </h1>

        <SidebarUser />
      </header>

      <nav className="sidebar-nav">
        <h2 className="visually-hidden">메뉴</h2>
        <SidebarDrawer urlMap={navMap.community} category="community" />
        <SidebarDrawer urlMap={navMap.store} category="store" />
        <SidebarDrawer urlMap={navMap.expert} category="expert" />
      </nav>
    </StyledSidebar>
  )
}
