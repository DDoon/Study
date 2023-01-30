import React, { useEffect } from 'react'
import { StyledSearchHistory } from 'src/components/Search/styles'

import { SearchHistoryItem } from 'src/components/Search/SearchHistoryItem'

interface SearchHistoryProps {
  className?: string
  hideWhenEmpty?: boolean
  onClick?: () => void
}

export const SearchHistory: React.FC<SearchHistoryProps> = ({
  className,
  hideWhenEmpty,
  onClick,
}) => {

  return (
    <StyledSearchHistory className={className}>
      <header className="search-history-header">
        <h2 className="title">최근 검색어</h2>
        <button type="button">전체 삭제</button>
      </header>

      <div className="search-history-content">
        <ol>
          {/* {histories.length > 0 ? (
            histories.map((history: SearchHistory) => (
              <SearchHistoryItem
                history={history}
                deleteHistory={deleteHistory}
                searchHistory={searchHistory}
                key={history.createdAt}
              />
            ))
          ) : (
            <h2 className="placeholder">최근 검색한 내역이 없습니다.</h2>
          )} */}
        </ol>
      </div>
    </StyledSearchHistory>
  )
}
