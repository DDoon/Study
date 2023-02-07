import React from 'react'
import { Slider, Thumbnails } from 'src/components'
import { StyledProductCarousel } from './styles'
import { getCarouselImages } from 'src/app/product/detail'
import { useAppSelector } from 'src/hooks'
import { TinySliderSettings } from 'tiny-slider-react'

const ProductCarouselOptions: TinySliderSettings = {
  autoplay: true,
  autoplayButtonOutput: false,
  controls: false,
  navContainer: '.product-carousel-thumbnail',
}

export const ProductCarousel: React.FC = () => {
  const carousleImages = useAppSelector(getCarouselImages)
  const id = 'product-carousel'

  if (!carousleImages.length) return null

  return (
    <StyledProductCarousel>
      <Slider
        className="product-carousel-slider"
        id={id}
        options={ProductCarouselOptions}
        images={carousleImages}
      />
      <Thumbnails
        id={id}
        images={carousleImages}
        tabletSize={56}
        desktopSize={75}
        className="product-carousel-thumbnail"
      />
    </StyledProductCarousel>
  )
}
