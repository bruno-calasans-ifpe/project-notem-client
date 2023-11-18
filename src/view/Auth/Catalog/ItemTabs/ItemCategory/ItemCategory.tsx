/* eslint-disable react/require-default-props */
import { Flex, Text, Card, Button, SimpleGrid } from '@mantine/core'
import { Item } from '../../../../../types/Item'
import ItemCard from '../../../Beach/ItemCard/ItemCard'

type ItemCategoryProps = {
  category: string
  items: Item[]
  onClickShowAll?: (category: string) => void
  onClickItem?: (item: Item) => void
  onFavoriteItem?: (item: Item) => void
}

function ItemCategory({
  category,
  items,
  onClickItem,
  onFavoriteItem,
  onClickShowAll,
}: ItemCategoryProps) {
  const showAllHandler = () => {
    if (onClickShowAll) {
      onClickShowAll(category)
    }
  }

  return (
    <Card
      radius="md"
      p={0}
      m={0}
    >
      <Flex
        justify="space-between"
        align="center"
        gap={5}
      >
        <Text
          size="xl"
          fw="bold"
          c="dark"
        >
          {category}
        </Text>
        <Button
          fw="bold"
          variant="subtle"
          onClick={showAllHandler}
        >
          Ver todos
        </Button>
      </Flex>
      <Flex>
        <SimpleGrid cols={4}>
          {items.map((item) => (
            <ItemCard
              item={item}
              key={item.name}
              onClick={onClickItem}
              onFavorite={onFavoriteItem}
            />
          ))}
        </SimpleGrid>
      </Flex>
    </Card>
  )
}

export default ItemCategory
