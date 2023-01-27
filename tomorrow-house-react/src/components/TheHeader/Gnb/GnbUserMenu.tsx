import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useClickOutside } from 'src/hooks/useClickOutside'
import { StyledGnbUserMenu } from 'src/components/TheHeader/Gnb/styles'

export const GnbUserMenu: React.FC = () => {
  const [open, setOpen] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)

  const toggleUserMenu = () => setOpen((prev) => !prev)
  const closeUserMenu = () => setOpen(false)

  useClickOutside(userMenuRef, closeUserMenu)

  return (
    <StyledGnbUserMenu>
      <button
        className="gnb-user-menu-button"
        type="button"
        aria-label="마이메뉴 열기 버튼"
        onClick={toggleUserMenu} 
      >
        <img src="/" alt="/" />
      </button>

      <div className="gnb-user-menu-content">
        <ul>
          <li>
            <Link to="/">마이페이지</Link>
          </li>
          <li>
            <Link to="/">나의 쇼핑</Link>
          </li>
          <li>
            <Link to="/">이벤트</Link>
          </li>
          <li>
            <button type="button">로그아웃</button>
          </li>
        </ul>
      </div>
    </StyledGnbUserMenu>
  )
}
