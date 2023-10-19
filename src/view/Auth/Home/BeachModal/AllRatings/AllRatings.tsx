/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/order */
/* eslint-disable no-restricted-syntax */
import { Flex, Text, Rating, Group, Anchor } from '@mantine/core'
import { BeachRating } from '../../../../../types/Beach'
import { useSetState } from '@mantine/hooks'
import { useEffect } from 'react'

type AllRatingsProps = {
  ratings: BeachRating[]
}

type RatingsData = {
  sumStars: number
  quant: number
  media: number
}

function AllRatings({ ratings }: AllRatingsProps) {
  const [ratingData, setRatingData] = useSetState<RatingsData>({
    media: 0,
    sumStars: 0,
    quant: ratings.length,
  })

  const updateRatingsData = () => {
    const quant = ratings.length
    let sumStars = 0
    let media = 0

    if (quant > 0) {
      for (const rating of ratings) {
        sumStars += rating.stars
      }
      media = sumStars / quant
    }
    setRatingData({ media, sumStars, quant })
  }

  useEffect(() => {
    updateRatingsData()
  }, [ratings?.length])

  return (
    <Flex
      gap={5}
      align="center"
      justify="center"
      direction="column"
    >
      <Group>
        <Flex
          align="center"
          gap={5}
        >
          <Text>({ratingData.media})</Text>
          <Rating
            value={ratingData.media}
            fractions={2}
            readOnly
          />
        </Flex>
        <Text
          size="xs"
          c="dimmed"
        >
          <Anchor>{ratingData.quant} avaliações no total</Anchor>
        </Text>
      </Group>
    </Flex>
  )
}

export default AllRatings
