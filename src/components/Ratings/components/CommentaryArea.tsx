/* eslint-disable react/require-default-props */
/* eslint-disable import/order */
import { Flex, Title, Text, ScrollArea, Rating } from '@mantine/core'
import Commentary from './Commentary'
import type { UserRating } from '../../../types/UserRating'
import useRating from '../../../hook/useRating/useRating'
import { CSSProperties } from 'react'

type CommentaryAreaProps = {
  title?: string
  subtitle?: string
  ratings: UserRating[]
  scrollHeight?: CSSProperties['height']
}

function CommentaryArea({ title, subtitle, ratings, scrollHeight }: CommentaryAreaProps) {
  const { ratingsData } = useRating(ratings)

  return (
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
          {title && <Title order={2}>{title}</Title>}
          {subtitle && (
            <Text
              size="lg"
              c="dimmed"
            >
              {subtitle}
            </Text>
          )}
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
            {ratingsData.media}.0
          </Text>
          <Rating
            value={ratingsData.media}
            readOnly
          />
          <Text
            size="sm"
            c="dimmed"
          >
            {ratingsData.quant} avaliações no total
          </Text>
        </Flex>
      </Flex>

      <ScrollArea
        type="scroll"
        offsetScrollbars
        scrollbarSize={5}
        h={scrollHeight ?? 400}
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
  )
}

export default CommentaryArea
