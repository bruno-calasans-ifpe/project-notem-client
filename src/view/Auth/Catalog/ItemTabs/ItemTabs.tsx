/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/order */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable arrow-body-style */
/* eslint-disable no-restricted-syntax */
import { Flex, SimpleGrid, Tabs, Text } from '@mantine/core'
import { useState, useEffect } from 'react'
import ItemCard from '../../../../components/ItemCard/ItemCard'
import ItemCategory from './components/ItemCategory'
import type { Item, ItemType } from '../../../../types/Item'
import { Link, useSearchParams } from 'react-router-dom'
import getUniqueValues from '../../../../utils/getUniqueValues'

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

  const getItemsFromCategory = (category: string) => {
    return items.filter((item) => item.category === category)
  }

  const getItemsFromType = (type: ItemType) => {
    return items.filter((item) => item.type === type)
  }

  const getItems = (tab: string) => {
    if (tab === 'Produto') {
      return getItemsFromType('product')
    }

    if (tab === 'Serviço') {
      return getItemsFromType('service')
    }

    return getItemsFromCategory(tab)
  }

  const organizeItemsPerCategory = () => {
    const allCategories = items.map(({ category }) => category)
    const categories = getUniqueValues(allCategories)

    const itemsPerCategory: ItemsCategory[] = [
      {
        category: defaultTab,
        items,
      },
    ]

    const products = getItemsFromType('product')
    const services = getItemsFromType('service')

    if (products.length > 0) {
      itemsPerCategory.push({
        category: 'Produto',
        items: products,
      })
    }

    if (services.length > 0) {
      itemsPerCategory.push({
        category: 'Serviços',
        items: services,
      })
    }

    for (const category of categories) {
      itemsPerCategory.push({
        category,
        items: getItemsFromCategory(category),
      })
    }

    return itemsPerCategory
  }

  useEffect(() => {
    const searchCategory = search.get('category')
    if (searchCategory) {
      setTab(searchCategory)
    }
  }, [search.get('category')])

  const itemsPerCategory = organizeItemsPerCategory()
  const currentItems = getItems(tab)

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
          {itemsPerCategory
            .filter(({ category }) => !['Tudo', 'Produto', 'Serviço'].includes(category))
            .map(({ category, items }) => (
              <ItemCategory
                key={category}
                category={category}
                items={items.slice(0, 4)}
                onClickItem={onClickItem}
                onFavoriteItem={onFavoriteItem}
                onClickShowAll={setTab}
              />
            ))}
        </Flex>
      </Tabs.Panel>
      {/* except the first category (all) */}
      {tab !== defaultTab && (
        <Tabs.Panel value={tab}>
          <Flex
            direction="column"
            pl={10}
            gap={5}
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
        </Tabs.Panel>
      )}
    </Tabs>
  )
}

export default ItemTabs
