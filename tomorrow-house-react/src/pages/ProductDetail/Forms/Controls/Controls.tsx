import React from 'react'
import { ExtraOptionControl } from './ExtraOptionControl'
import { OneDepthControl } from './OneDepthControl'
import { getDepthLevel } from 'src/app/product/detail'
import { TwoDepthControl } from './TwoDepthControl'
import { useAppSelector } from 'src/hooks'
import { StyledProductOrderControls } from '../styles'

interface ControlsProps {
  id: string
  className?: string
}

export const Controls: React.FC<ControlsProps> = ({ id, className }) => {
  const depthLevel = useAppSelector(getDepthLevel)

  return (
    <StyledProductOrderControls className={className}>
      {depthLevel === 1 && <OneDepthControl id={id} />}
      {depthLevel === 2 && <TwoDepthControl id={id} />}
      <ExtraOptionControl id={id} />
    </StyledProductOrderControls>
  )
}
