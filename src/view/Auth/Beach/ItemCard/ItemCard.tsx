/* eslint-disable react/require-default-props */
import { Flex, Group, Image, Text, ActionIcon, Card, Button } from '@mantine/core'
import { IconBookmark, IconBookmarkFilled, IconInfoCircle } from '@tabler/icons-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import slugify from 'slugify'
import ActionIconOverlay from '../../../../components/Overlay/Overlay'

type ItemCardProps = {
  name: string
  price: number
  img: string
  onBookmark?: () => void
  onClick?: () => void
}

function ItemCard({ name, price, img, onClick, onBookmark }: ItemCardProps) {
  const [bookmark, setBookmark] = useState(false)

  const bookmarkHandler = () => {
    setBookmark((curr) => !curr)
    if (onBookmark) {
      onBookmark()
    }
  }

  return (
    <Flex
      justify="space-between"
      align="center"
      p={5}
    >
      <Card
        // shadow="sm"
        padding="lg"
        radius="md"
        h="100%"
      >
        <Card.Section className="op">
          <Image
            src={img}
            alt={name}
            h="100%"
            onClick={onClick}
          />
        </Card.Section>

        <Flex
          direction="column"
          justify="space-evenly"
          mt="md"
          mb="xs"
          gap={5}
        >
          <Text
            size="sm"
            fw="bold"
          >
            {name}
          </Text>
          <Text
            size="sm"
            fw="bold"
            c="green"
          >
            R$ {price},00
          </Text>
        </Flex>

        <ActionIconOverlay>
          <ActionIcon
            variant="subtle"
            c="blue"
            onClick={bookmarkHandler}
          >
            <IconBookmark
              style={{ width: 30, height: 30 }}
              stroke={1.5}
              fill={bookmark ? 'green' : 'transparent'}
              color={bookmark ? 'green' : 'blue'}
            />
          </ActionIcon>
        </ActionIconOverlay>
      </Card>
    </Flex>
  )
}

export default ItemCard
