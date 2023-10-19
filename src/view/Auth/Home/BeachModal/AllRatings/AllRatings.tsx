/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/order */
/* eslint-disable no-restricted-syntax */
import { Flex, Text, Rating, Group, Anchor, Modal, Title, ScrollArea } from '@mantine/core'
import { BeachRating } from '../../../../../types/Beach'
import { useSetState, useDisclosure } from '@mantine/hooks'
import { useEffect } from 'react'
import Commentary from '../Commentary/Commentary'

type AllRatingsProps = {
  ratings: BeachRating[]
}

type RatingsData = {
  sumStars: number
  quant: number
  media: number
}

function AllRatings({ ratings }: AllRatingsProps) {
  const [opened, { open, close }] = useDisclosure(false)
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
      <Modal
        opened={opened}
        onClose={close}
        centered
        withCloseButton={false}
      >
        <Flex
          direction="column"
          gap={20}
        >
          <Flex
            id="commentaries-header"
            direction="column"
            align="center"
            gap={5}
          >
            <Flex
              id="superior-header"
              direction="column"
              align="center"
            >
              <Title order={2}> Avaliações da Praia</Title>
              <Text
                size="lg"
                c="dimmed"
              >
                Praia da Capivara
              </Text>
            </Flex>
            <Flex
              id="inferior-header"
              direction="column"
              align="center"
              gap={2}
            >
              <Text
                fw="bold"
                size="xl"
              >
                {ratingData.media}.0
              </Text>
              <Rating
                value={ratingData.media}
                readOnly
              />
              <Text
                size="sm"
                c="dimmed"
              >
                {ratingData.quant} avaliações no total
              </Text>
            </Flex>
          </Flex>

          <ScrollArea
            type="scroll"
            offsetScrollbars
            scrollbarSize={5}
            h={400}
          >
            <Flex
              id="commentaries-content"
              direction="column"
              gap={20}
            >
              {ratings.map((rating) => (
                <Commentary
                  rating={rating}
                  key={rating.user}
                />
              ))}
            </Flex>
          </ScrollArea>
        </Flex>
      </Modal>
      <Group>
        <Flex
          align="center"
          gap={5}
        >
          <Text>({ratingData.media})</Text>
          <Rating
            value={ratingData.media}
            readOnly
          />
        </Flex>
        <Text
          size="xs"
          c="dimmed"
        >
          <Anchor onClick={open}>{ratingData.quant} avaliações no total</Anchor>
        </Text>
      </Group>
    </Flex>
  )
}

export default AllRatings
