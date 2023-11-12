/* eslint-disable react/no-array-index-key */
import { useState } from 'react'
import { Image } from '@mantine/core'
import {
  Carousel,
  useAnimationOffsetEffect,
  Embla,
  CarouselProps,
} from '@mantine/carousel'

type CustomCarouselProps = CarouselProps & {
  items: React.ReactNode[]
}

function CustomCarousel({ items, ...carouselProps }: CustomCarouselProps) {
  // carousel bug fix
  const [embla, setEmbla] = useState<Embla | null>(null)
  useAnimationOffsetEffect(embla, 200)
  return (
    <Carousel
      loop
      height={300}
      align="center"
      withIndicators
      getEmblaApi={setEmbla}
      slideGap="xs"
      {...carouselProps}
    >
      {items.map((item, key) => (
        <Carousel.Slide key={key}>{item}</Carousel.Slide>
      ))}
    </Carousel>
  )
}

export default CustomCarousel
