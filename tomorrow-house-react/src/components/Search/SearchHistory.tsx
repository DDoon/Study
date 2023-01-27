import React, { useEffect } from 'react'
import { StyledSearchHistory } from 'src/components/Search/styles'
import {
  deleteSearchHistory,
  getSearchHistory,
  resetSearchHistory,
  setSearchHistory,
} from 'src/app/searchHistory'
import { useAppDispatch, useAppSelector } from 'src/hooks'
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
  const dispatch = useAppDispatch()
  const histories = useAppSelector(getSearchHistory)

  const searchHistory = (content: string) => {
    dispatch(setSearchHistory(content))
    if (onClick) onClick()
  }

  const deleteHistory = (content: string) => {
    dispatch(deleteSearchHistory(content))
  }

  const deleteAllHistories = () => {
    dispatch(resetSearchHistory())
  }

  useEffect(() => {
    store.set('tmrHouse.searchHistories', histories)
  }, [histories])

  if (!histories.length && hideWhenEmpty) {
    return null
  }

  return (
    <StyledSearchHistory className={className}>
      <header className="search-history-header">
        <h2 className="title">최근 검색어</h2>
        <button type="button" onClick={deleteAllHistories}>
          전체 삭제
        </button>
      </header>

      <div className="search-history-content">
        <ol>
          {histories.length > 0 ? (
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
          )}
        </ol>
      </div>
    </StyledSearchHistory>
  )
}
