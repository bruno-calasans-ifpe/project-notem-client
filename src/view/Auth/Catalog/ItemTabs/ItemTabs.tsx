/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/order */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable arrow-body-style */
/* eslint-disable no-restricted-syntax */
import { Anchor, Flex, SimpleGrid, Tabs, Text } from '@mantine/core'
import { useState, useEffect } from 'react'
import ItemCard from '../../Beach/ItemCard/ItemCard'
import ItemCategory from './ItemCategory/ItemCategory'
import type { Item } from '../../../../types/Item'
import { Link, useSearchParams } from 'react-router-dom'

type ItemTabsProps = {
  items: Item[]
  defaultTab: string
  onClickItem?: (item: Item) => void
  onFavoriteItem?: (item: Item) => void
}

type ItemsCategory = {
  category: string
  items: Item[]
}

function ItemTabs({ defaultTab, items, onClickItem, onFavoriteItem }: ItemTabsProps) {
  const [tab, setTab] = useState(defaultTab)
  const [search] = useSearchParams()

  const changeTabHandler = () => {
    const category = search.get('category')
    if (category) {
      setTab(category)
    }
  }

  const getItemsFromCategory = (category: string) => {
    return items.filter((item) => item.category === category)
  }

  const organizeItemsPerCategory = () => {
    const categories: string[] = []

    for (const item of items) {
      const category = item.category
      if (!categories.includes(category)) {
        categories.push(category)
      }
    }

    const itemsPerCategory: ItemsCategory[] = [
      {
        category: defaultTab,
        items,
      },
    ]

    for (const category of categories) {
      itemsPerCategory.push({
        category,
        items: getItemsFromCategory(category),
      })
    }

    return itemsPerCategory
  }

  const itemsPerCategory = organizeItemsPerCategory()
  const currentItems = getItemsFromCategory(tab)

  useEffect(() => {
    changeTabHandler()
  }, [search.get('category')])

  return (
    <Tabs
      value={tab}
      orientation="vertical"
      variant="pills"
    >
      <Tabs.List mr={10}>
        {itemsPerCategory.map(({ category }) => (
          <Link
            to={`?category=${category}`}
            key={category}
            style={{ color: 'black' }}
          >
            <Tabs.Tab
              value={category}
              w="100%"
            >
              {category}
            </Tabs.Tab>
          </Link>
        ))}
      </Tabs.List>

      <Tabs.Panel value={defaultTab}>
        <Flex
          direction="column"
          pl={10}
          gap={5}
        >
          {itemsPerCategory.slice(1).map(({ category, items }) => (
            <ItemCategory
              key={category}
              category={category}
              items={items.slice(0, 4)}
              onClickItem={onClickItem}
              onFavoriteItem={onFavoriteItem}
              onClickShowAll={changeTabHandler}
            />
          ))}
        </Flex>
      </Tabs.Panel>
      {/* except the first category (all) */}
      {tab !== defaultTab && (
        <Tabs.Panel value={tab}>
          <Flex
            gap={10}
            direction="column"
          >
            <Flex
              align="center"
              gap={5}
            >
              <Text
                size="lg"
                fw="bold"
              >
                Mostrando todos items da categoria
              </Text>
              <Text
                size="lg"
                c="cyan"
                tt="capitalize"
                fw="bold"
              >
                {tab}
              </Text>
            </Flex>
            <SimpleGrid cols={4}>
              {currentItems.map((item) => (
                <ItemCard
                  item={item}
                  key={item.name}
                  onClick={onClickItem}
                  onFavorite={onFavoriteItem}
                />
              ))}
            </SimpleGrid>
          </Flex>
        </Tabs.Panel>
      )}
    </Tabs>
  )
}

export default ItemTabs
