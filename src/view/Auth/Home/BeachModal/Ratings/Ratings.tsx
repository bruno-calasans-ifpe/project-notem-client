/* eslint-disable react/require-default-props */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/order */
/* eslint-disable no-restricted-syntax */
import { Flex, Text, Rating, Anchor } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import RatingModal from './RatingsModal/RatingsModal'
import type { UserRating } from '../../../../../types/UserRating'
import useRating from '../../../../../hook/useRating/useRating'

type RatingsProps = {
  ratings: UserRating[]
  title: string
  subtitle: string
}

function Ratings({ ratings, title, subtitle }: RatingsProps) {
  const [opened, { open, close }] = useDisclosure(false)
  const { ratingsData } = useRating(ratings)

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
        title={title}
        subtitle={subtitle}
        ratings={ratings}
      />
      <Flex
        align="center"
        direction="column"
        gap={5}
      >
        <Flex
          align="center"
          gap={5}
        >
          <Text>{ratingsData.media}.0</Text>
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
      </Flex>
    </Flex>
  )
}

export default Ratings
