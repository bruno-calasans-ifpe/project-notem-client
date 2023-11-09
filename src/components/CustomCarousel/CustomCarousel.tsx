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
  images: string[]
}

function CustomCarousel({ images, ...carouselProps }: CustomCarouselProps) {
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
      {images.map((image, key) => (
        <Carousel.Slide key={key}>
          <Image
            src={image}
            height="100%"
            alt="Norway"
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  )
}

export default CustomCarousel
