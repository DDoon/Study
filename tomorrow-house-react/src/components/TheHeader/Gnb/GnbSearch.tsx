import React, { useState, useRef } from 'react'
import { SearchInput } from 'src/components/Search/SearchInput'
import { SearchHistory } from 'src/components/Search/SearchHistory'
import { StyledGnbSearch } from 'src/components/TheHeader/Gnb/styles'
import classNames from 'classnames'
import { useClickOutside } from 'src/hooks/useClickOutside'

export const GnbSearch = () => {
  const [open, setOpen] = useState(false)
  const gnbSearchRef = useRef<HTMLDivElement>(null)

  const openHistory = () => setOpen(true)
  const closeHistory = () => setOpen(false)

  useClickOutside(gnbSearchRef, closeHistory)

  return (
    <StyledGnbSearch className="gnb-search" ref={gnbSearchRef}>
      <SearchInput onFocus={openHistory} onSubmit={closeHistory} />
      <SearchHistory
        className={classNames('gnb-search-history', { open })}
        hideWhenEmpty
        onClick={closeHistory}
      />
    </StyledGnbSearch>
  )
}
