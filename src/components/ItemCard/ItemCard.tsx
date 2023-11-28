/* eslint-disable react/require-default-props */
import { Flex, Image, Text, ActionIcon, Card } from '@mantine/core'
import { IconStar, IconStarFilled } from '@tabler/icons-react'
import { useState } from 'react'
import ActionIconOverlay from '../Overlay/Overlay'
import type { Item } from '../../types/Item'
import ItemBadges from '../ItemBadges/ItemBadges'

type ItemCardProps = {
  item: Item
  showFavorite?: boolean
  onFavorite?: (item: Item) => void
  onClick?: (item: Item) => void
}

function ItemCard({ item, showFavorite, onClick, onFavorite }: ItemCardProps) {
  const [favorite, setFavorite] = useState(false)

  const favoriteHandler = () => {
    setFavorite((curr) => !curr)
    if (onFavorite) {
      onFavorite(item)
    }
  }

  const clickHandler = () => {
    if (onClick) {
      onClick(item)
    }
  }

  return (
    <Flex
      justify="space-between"
      align="center"
      p={5}
    >
      <Card
        radius="md"
        w="100%"
        h="100%"
      >
        <Card.Section className="op">
          <Image
            src={item.img}
            alt={item.name}
            onClick={clickHandler}
          />
        </Card.Section>

        <Flex
          direction="column"
          justify="space-evenly"
          mt="md"
          mb="xs"
          gap={5}
        >
          <ItemBadges item={item} />
          <Text size="sm">{item.name}</Text>
          <Text
            size="sm"
            fw="bold"
            c="green"
          >
            R$ {item.price},00
          </Text>
        </Flex>

        {showFavorite && (
          <ActionIconOverlay>
            <ActionIcon
              variant="subtle"
              c="blue"
              onClick={favoriteHandler}
            >
              {favorite ? (
                <IconStarFilled
                  style={{ width: 15, height: 15, color: 'green' }}
                  stroke={1.5}
                />
              ) : (
                <IconStar
                  style={{ width: 15, height: 15, color: 'green' }}
                  stroke={1.5}
                />
              )}
            </ActionIcon>
          </ActionIconOverlay>
        )}
      </Card>
    </Flex>
  )
}

export default ItemCard
