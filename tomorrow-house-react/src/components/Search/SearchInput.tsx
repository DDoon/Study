import React, { useState, ChangeEvent, KeyboardEvent } from 'react'
import { useRouter } from 'src/hooks/useRouter'
import { useAppDispatch } from 'src/hooks'
import { getSearchQueryUrl } from '../utils'
import { setSearchHistory } from 'src/app/searchHistory'
// import { SearchIcon } from 'src/assets/icons'
import { Input } from 'src/components/Forms/Input'

interface SearchInputProps {
  className?: string
  onFocus?: () => void
  onSubmit?: () => void
}

export const SearchInput: React.FC<SearchInputProps> = ({
  className,
  onFocus,
  onSubmit,
}) => {
  const dispatch = useAppDispatch()
  const { navigate } = useRouter()
  const [value, setValue] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const postSubmit = () => {
    if (!value) return
    navigate(getSearchQueryUrl(value))
  }

  const handleSubmit = () => {
    postSubmit()
    dispatch(setSearchHistory(value))
    setValue('')
    if (onSubmit) onSubmit()
  }

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation()
    if (e.key === 'Enter') handleSubmit()
  }

  return (
    <Input
      className={className}
      type="text"
      value={value}
      placeholder="스토어 검색"
      onChange={handleChange}
      onFocus={onFocus}
      onKeyPress={handleEnter}
    >
      <button>
        {/* <SearchIcon /> */}
      </button>
    </Input>
  )
}
