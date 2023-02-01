import React from 'react'
import { StyledSearchModal } from 'src/components/Modal/styles'
import { ModalCategory } from 'src/types/enum'
import { useResponsive, useModal } from 'src/hooks'
import { SearchHistory, SearchInput } from '../Search'
import { Grid } from '../Grid'
import { Button } from '../Button/Button'

export const ModalSearch: React.FC = () => {
  const { isDesktop } = useResponsive()
  const { removeModal } = useModal()

  if (isDesktop) return null

  const closeModal = () => removeModal(ModalCategory.SearchModal)

  return (
    <StyledSearchModal>
      <Grid sm={4}>
        <header className="search-modal-header">
          <h1 className="visuallyHidden">검색창</h1>
          <div className="form-group">
            <SearchInput className="search-input" />
            <Button className="close" variant="ghost" onClick={closeModal}>
              취소
            </Button>
          </div>
        </header>
        <SearchHistory onClick={closeModal} />
      </Grid>
    </StyledSearchModal>
  )
}
