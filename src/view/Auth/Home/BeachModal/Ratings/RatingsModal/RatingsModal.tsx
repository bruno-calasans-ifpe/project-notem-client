import { Flex, Modal, Rating, ScrollArea, Text, Title } from '@mantine/core'
import type { RatingsData } from '../ratings.type'
import Commentary from '../Commentary/Commentary'
import { BeachRating } from '../../../../../../types/Beach'

type RatingModalProps = {
  opened: boolean
  close: () => void
  ratingData: RatingsData
  ratings: BeachRating[]
}

function RatingModal({ opened, close, ratingData, ratings }: RatingModalProps) {
  return (
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
  )
}

export default RatingModal
