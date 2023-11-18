import { Flex, Group, Title, Text, Rating, Divider } from '@mantine/core'
import type { UserRating } from '../../../../../../types/UserRating'

type CommentaryProps = {
  rating: UserRating
}

function Commentary({ rating }: CommentaryProps) {
  return (
    <Flex
      direction="column"
      gap={8}
    >
      <Divider />
      <Flex
        id="commentary-header"
        direction="column"
      >
        <Flex direction="column">
          <Group justify="space-between">
            <Title order={4}>{rating.user}</Title>
            <Text
              size="sm"
              c="dimmed"
            >
              {rating.date}
            </Text>
          </Group>

          <Flex
            justify="flex-start"
            align="center"
            gap={3}
          >
            <Text>({rating.stars})</Text>
            <Rating
              value={rating.stars}
              fractions={2}
              readOnly
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        id="commentary-content"
        direction="column"
        gap={5}
      >
        <Text c="dimmed">{rating.commentary}</Text>
      </Flex>
    </Flex>
  )
}

export default Commentary
