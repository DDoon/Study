import React, { useEffect, useMemo, useState } from 'react'
import { Lnb } from 'src/components/TheHeader/Lnb/Lnb'
import { Gnb } from 'src/components/TheHeader/Gnb/Gnb'
import { StyledTheHeader } from 'src/components/TheHeader/styles'
import {
  GNB_HEIGHT_SM,
  GNB_HEIGHT_LG,
} from 'src/components/TheHeader/Gnb/styles'
import {
  LNB_HEIGHT_SM,
  LNB_HEIGHT_LG,
} from 'src/components/TheHeader/Lnb/styles'
import { stripPx } from 'src/styles/utils'
import { useResponsive } from 'src/hooks'
import classNames from 'classnames'
import { throttle } from 'lodash'

const gnbHeightSm = stripPx(GNB_HEIGHT_SM)
const gnbHeightLg = stripPx(GNB_HEIGHT_LG)
const lnbHeightSm = stripPx(LNB_HEIGHT_SM)
const lnbHeightLg = stripPx(LNB_HEIGHT_LG)
const globalHeaderHeightSm = gnbHeightSm + lnbHeightSm
const globalHeaderHeightLg = gnbHeightLg + lnbHeightLg

export const TheHeader: React.FC = () => {
  const { isMobile } = useResponsive()
  const [fixed, setFixed] = useState(false)
  const [lastScrollY, setLastScollY] = useState(window.scrollY)
  const [scrollDirection, setScrollDirection] = useState(0)

  const toggleFixed = () => {
    const { scrollY } = window
    const globalHeaderHeight = isMobile
      ? globalHeaderHeightSm
      : globalHeaderHeightLg
    if (scrollY > globalHeaderHeight) {
      if (!fixed) setFixed(true)
    } else {
      if (fixed) setFixed(false)
    }
  }

  const toggleScrollDirection = () => {
    const { scrollY } = window
    if (scrollY > lastScrollY) {
      if (scrollDirection !== 1) setScrollDirection(1)
    } else {
      if (scrollDirection !== -1) setScrollDirection(-1)
    }
  }

  const handleScroll = throttle(() => {
    toggleFixed()
    toggleScrollDirection()
    setLastScollY(window.scrollY)
  }, 200)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const nestedClassName = useMemo(
    () =>
      classNames({
        fixed,
        scrollUp: scrollDirection === -1,
        scrollDown: scrollDirection === 1,
      }),
    [fixed, scrollDirection]
  )

  return (
    <StyledTheHeader className={nestedClassName}>
        <Gnb className="gnb-layout" />
        <Lnb className="lnb-laytout" />
    </StyledTheHeader>
  )
}
