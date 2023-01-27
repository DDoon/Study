import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from 'src/components/Avatar/Avatar'
import { StyledSidebarUser } from 'src/components/Sidebar/styles'

interface SidebarUserProps {
  closeSidebar?: () => void
}

export const SidebarUser: React.FC<SidebarUserProps> = ({ closeSidebar }) => {
  return (
    <StyledSidebarUser>
      <Link to="/">
        <Avatar className="avatar" username="나다" />
        <strong className="username">나다</strong>
      </Link>
    </StyledSidebarUser>
  )
}
