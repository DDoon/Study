import React from 'react'
import {
  StyledThumbnailItem,
  StyledThumbnails,
} from 'src/components/Carousel/styles'
export interface ThumbnailsProps {
  className: string
  id: string
  images: string[]
  size?: number
  tabletSize?: number
  desktopSize?: number
}

export const Thumbnails: React.FC<ThumbnailsProps> = ({
  className,
  id,
  images,
  size = 40,
  tabletSize = size,
  desktopSize = tabletSize,
}) => {
  return (
    <StyledThumbnails className={className}>
      {images.map((imageUrl, index) => {
        return (
          <StyledThumbnailItem
            size={size}
            tabletSize={tabletSize}
            desktopSize={desktopSize}
            key={`${id}-slider-thumbnail-${index}`}
          >
            <img src={imageUrl} alt={`${index}번 이미지 보기`} />
          </StyledThumbnailItem>
        )
      })}
    </StyledThumbnails>
  )
}
