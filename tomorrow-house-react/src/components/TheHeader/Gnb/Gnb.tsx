import React from 'react'
import classnames from 'classnames'
import { StyledGnb, StyledGnbIconButton } from './styles'
import { Grid } from '../../Grid'
import { Link } from 'react-router-dom'
// import {
//   BookmarkIcon,
//   Logo,
//   MenuIcon,
//   SearchIcon,
//   BellIcon,
//   CartIcon,
//   ChevronIcon,
// } from 'src/assets/icons/index'
import { useAppSelector, useResponsive } from 'src/hooks'
import { GnbNav } from 'src/components/TheHeader/Gnb/GnbNav'
import { GnbSearch } from 'src/components/TheHeader/Gnb/GnbSearch'
import { Button } from 'src/components/Button/Button'

interface GnbProps {
  className?: string
}

export const Gnb: React.FC<GnbProps> = ({ className }) => {
  // const user = useAppSelector(getUser)
  // const isLoggedIn = user != null
  const { isMobile, isDesktop } = useResponsive()

  return (
    <StyledGnb className={classnames('gnb', className)}>
      <Grid sm={4}>
        <div className="gnb-wrapper">
          <div className="gnb-left">
            <h1 className="logo">
              <Link to="/">
                {/* <Logo /> */}
              </Link>
            </h1>

            {!isMobile ? (
              <StyledGnbIconButton
                className="gnb-icon-button menu"
                type="button"
                aria-label="메뉴 열기 버튼"
              >
                {/* <MenuIcon /> */}
              </StyledGnbIconButton>
            ) : (
              <GnbNav />
            )}
          </div>

          <div className="gnb-right">
            {isDesktop && <GnbSearch />}

            <div className="button-group">
              {!isDesktop && (
                <StyledGnbIconButton
                  className="gnb-icon-button search"
                  type="button"
                  aria-label="검색창 열기 버튼"
                >
                  {/* <SearchIcon /> */}
                </StyledGnbIconButton>
              )}

              {!isMobile && (
                <React.Fragment>
                  <StyledGnbIconButton
                    className="gnb-icon-button bookmark"
                    as={Link}
                    to="/"
                    aria-label="스크랩북 페이지로 이동"
                  >
                    {/* <BookmarkIcon /> */}
                  </StyledGnbIconButton>
                  <StyledGnbIconButton
                    className="gnb-icon-button"
                    as={Link}
                    to="/"
                    aria-label="내 소식 페이지로 이동"
                  >
                    {/* <BellIcon /> */}
                  </StyledGnbIconButton>
                </React.Fragment>
              )}
              <StyledGnbIconButton
                className="gnb-icon-button cart"
                as={Link}
                to="/cart"
                aria-label="장바구니 페이지로 이동"
              >
                {/* <CartIcon /> */}
                <strong className="badge">5</strong>
              </StyledGnbIconButton>
            </div>
            {!isMobile && (
              <Button size={40} variant={'primary'} type="button">
                글쓰기
                {/* <ChevronIcon /> */}
              </Button>
            )}
          </div>
        </div>
      </Grid>
    </StyledGnb>
  )
}
