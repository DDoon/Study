import React from 'react'
import { Link } from 'react-router-dom'
import { StyledSearchHistoryItem } from './styles'
import { getSearchQueryUrl } from '../utils'
import { CloseIcon } from 'src/assets/icons'

interface SearchHistoryItemProps {
  history: SearchHistory
  deleteHistory: (content: string) => void
  searchHistory: (content: string) => void
}

export const SearchHistoryItem: React.FC<SearchHistoryItemProps> = ({
  history,
  deleteHistory,
  searchHistory,
}) => {
  const { content } = history

  const searchQueryUrl = getSearchQueryUrl(content)
  const searchItem = () => searchHistory(content)
  const deleteItem = () => deleteHistory(content)

  return (
    <StyledSearchHistoryItem>
      <Link className="word" to={searchQueryUrl} onClick={searchItem}>
        {content}
      </Link>
      <button
        className="delete"
        type="button"
        value={content}
        onClick={deleteItem}
        aria-label="검색어 삭제"
      >
        <CloseIcon />
      </button>
    </StyledSearchHistoryItem>
  )
}
