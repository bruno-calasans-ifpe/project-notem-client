/* eslint-disable react/require-default-props */
import { Flex, Badge } from '@mantine/core'
import type { Item } from '../../../../../types/Item'

type ItemBadgesProps = {
  item: Item
  direction?: React.CSSProperties['flexDirection']
  hideType?: boolean
  hideCategory?: boolean
  showTags?: boolean
}

function ItemBadges({
  item,
  direction,
  hideCategory,
  hideType,
  showTags,
}: ItemBadgesProps) {
  return (
    <Flex
      gap={5}
      direction={direction ?? 'column'}
    >
      {!hideType && (
        <Badge
          size="xs"
          color={item.type === 'product' ? 'cyan' : 'grape'}
        >
          {item.type === 'product' ? 'produto' : 'serviço'}
        </Badge>
      )}

      {!hideCategory && (
        <Badge
          size="xs"
          color="indigo"
        >
          {item.category}
        </Badge>
      )}

      {showTags &&
        item.tags.map((tag) => (
          <Badge
            size="xs"
            color="teal"
            key={tag}
          >
            {tag}
          </Badge>
        ))}
    </Flex>
  )
}

export default ItemBadges
