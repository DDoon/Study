import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarUser } from 'src/components/Sidebar/SidebarUser'
import { Logo } from 'src/assets/icons'
import { StyledSidebar } from 'src/components/Sidebar/styles'
import { SidebarDrawer } from 'src/components/Sidebar/SidebarDrawer'
import navMap from '../navMap.json'
import { useResponsive, useModal } from 'src/hooks'
import { ModalCategory } from 'src/types/enum'

export const Sidebar: React.FC = () => {
  const { removeModal } = useModal()
  const { isDesktop } = useResponsive()

  const closeSidebar = () => removeModal(ModalCategory.SidebarModal)

  if (isDesktop) return null

  return (
    <StyledSidebar className="sidebar">
      <header className="sidebar-header">
        <h1 className="logo">
          <Link to="/">
            <Logo aria-label="내일의 집" />
          </Link>
        </h1>

        <SidebarUser closeSidebar={closeSidebar} />
      </header>

      <nav className="sidebar-nav">
        <h2 className="visuallyHidden">메뉴</h2>
        <SidebarDrawer
          urlMap={navMap.community}
          category="community"
          closeSidebar={closeSidebar}
        />
        <SidebarDrawer
          urlMap={navMap.store}
          category="store"
          closeSidebar={closeSidebar}
        />
        <SidebarDrawer
          urlMap={navMap.expert}
          category="expert"
          closeSidebar={closeSidebar}
        />
      </nav>
    </StyledSidebar>
  )
}
