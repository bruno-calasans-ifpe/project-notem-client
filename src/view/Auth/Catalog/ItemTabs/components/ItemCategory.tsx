/* eslint-disable react/require-default-props */
import { Flex, Text, Card, Button, SimpleGrid } from '@mantine/core'
import { Link } from 'react-router-dom'
import { Item } from '../../../../../types/Item'
import ItemCard from '../../../../../components/ItemCard/ItemCard'

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
        <Link to={`?category=${category}`}>
          <Button
            fw="bold"
            variant="subtle"
            onClick={showAllHandler}
          >
            Ver todos
          </Button>
        </Link>
      </Flex>
      <Flex>
        <SimpleGrid cols={4}>
          {items.map((item) => (
            <Link
              to={`?item=${item.id}`}
              key={item.name}
            >
              <ItemCard
                item={item}
                onClick={onClickItem}
                onFavorite={onFavoriteItem}
              />
            </Link>
          ))}
        </SimpleGrid>
      </Flex>
    </Card>
  )
}

export default ItemCategory
