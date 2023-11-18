/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable arrow-body-style */
/* eslint-disable no-restricted-syntax */
import { Flex, SimpleGrid, Tabs, Text } from '@mantine/core'
import { useState } from 'react'
import ItemCard from '../../Beach/ItemCard/ItemCard'
import ItemCategory from './ItemCategory/ItemCategory'
import type { Item } from '../../../../types/Item'

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

  const changeTabHandler = (selectTab: string) => {
    setTab(selectTab)
  }

  const getItemsFromCategory = (category: string) => {
    return items.filter((item) => item.categories.includes(category))
  }

  const organizeItemsPerCategory = () => {
    const categories: string[] = []

    for (const item of items) {
      for (const category of item.categories) {
        if (!categories.includes(category)) {
          categories.push(category)
        }
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

  return (
    <Tabs
      value={tab}
      onChange={changeTabHandler}
      orientation="vertical"
      variant="pills"
    >
      <Tabs.List mr={10}>
        {itemsPerCategory.map(({ category }) => (
          <Tabs.Tab
            value={category}
            key={category}
          >
            {category}
          </Tabs.Tab>
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
