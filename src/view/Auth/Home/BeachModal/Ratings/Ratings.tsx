/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/order */
/* eslint-disable no-restricted-syntax */
import { Flex, Text, Rating, Group, Anchor, Modal, Title, ScrollArea } from '@mantine/core'
import { BeachRating } from '../../../../../types/Beach.type'
import { useSetState, useDisclosure } from '@mantine/hooks'
import { useEffect } from 'react'
import RatingModal from './RatingsModal/RatingsModal'
import type { RatingsData } from './ratings.type'

type RatingsProps = {
  ratings: BeachRating[]
}

function Ratings({ ratings }: RatingsProps) {
  const [opened, { open, close }] = useDisclosure(false)
  const [ratingsData, setRatingData] = useSetState<RatingsData>({
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
      media = Math.round(sumStars / quant)
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
      <RatingModal
        opened={opened}
        close={close}
        ratings={ratings}
        ratingData={ratingsData}
      />
      <Group>
        <Flex
          align="center"
          gap={5}
        >
          <Text>({ratingsData.media})</Text>
          <Rating
            value={ratingsData.media}
            readOnly
          />
        </Flex>
        <Text
          size="xs"
          c="dimmed"
        >
          <Anchor onClick={open}>{ratingsData.quant} avaliações no total</Anchor>
        </Text>
      </Group>
    </Flex>
  )
}

export default Ratings
