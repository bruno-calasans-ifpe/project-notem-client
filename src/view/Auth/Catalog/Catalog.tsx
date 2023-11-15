/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable arrow-body-style */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Flex, Text, Tabs, Rating, Avatar, SimpleGrid } from '@mantine/core'
import Section from '../../../components/Section/Section'
import reverseSlugify from '../../../utils/reverseSlugify'
import type { Vendor } from '../../../types/Vendor'
import Search from '../Home/SearchBar/Search/Search'
import type { Item } from '../../../types/Item'
import ItemCategory from './ItemCategory/ItemCategory'
import ItemCard from '../Beach/ItemCard/ItemCard'

type ItemsCategory = {
  category: string
  items: Item[]
}

function Catalog() {
  const { name } = useParams()
  const [tab, setTab] = useState('Tudo')
  const [vendor, setVendor] = useState<Vendor | null>(null)
  const [items, setItems] = useState<Item[]>([])

  const loadVendor = () => {
    if (!name) {
      return
    }
    const loadedVendor: Vendor = {
      name,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png',
      rating: 5,
    }
    setVendor(loadedVendor)
  }

  const loadItems = () => {
    const loadedItems: Item[] = [
      {
        name: 'Cerveja com creme de merda seca + óleo de virgem',
        price: 50,
        img: 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png',
        type: 'product',
        categories: ['cerveja'],
      },
      {
        name: 'Cerveja de Chocolate',
        price: 100,
        img: 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png',
        type: 'product',
        categories: ['cerveja'],
      },
      {
        name: 'Espetinho de carne de iguana',
        price: 30,
        img: 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png',
        type: 'product',
        categories: ['espeto'],
      },
      {
        name: 'Espetinho de carne humana',
        price: 50,
        img: 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png',
        type: 'product',
        categories: ['espeto'],
      },
      {
        name: 'Camarão ao alho e óleo',
        price: 60,
        img: 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png',
        type: 'product',
        categories: ['camarão'],
      },
      {
        name: 'Bobó de camarão',
        price: 55,
        img: 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png',
        type: 'product',
        categories: ['camarão'],
      },
    ]
    setItems(loadedItems)
  }

  const changeTabHandler = (t: string) => {
    setTab(t)
  }

  const getItemsFromCategory = (category: string) => {
    return items.filter((item) => item.categories.includes(category.toLowerCase()))
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
        category: 'Tudo',
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
    if (name) {
      loadVendor()
      loadItems()
    }
  }, [name])

  return (
    <Section
      title="Catálogo"
      titleColor="black"
    >
      <Flex
        direction="column"
        gap={20}
      >
        <Flex
          gap={20}
          align="center"
        >
          <Flex
            align="center"
            gap={5}
          >
            <Avatar
              src={vendor?.img}
              w={50}
              h={50}
            />
            <Flex
              direction="column"
              justify="center"
              align="center"
            >
              <Text
                size="lg"
                fw="bold"
              >
                {reverseSlugify(name!)}
              </Text>

              <Flex
                gap={5}
                align="center"
              >
                <Text
                  size="lg"
                  fw="400"
                >
                  {vendor?.rating}.0
                </Text>
                <Rating
                  value={vendor?.rating}
                  readOnly
                />
              </Flex>
            </Flex>
          </Flex>
          <Search placeholder="Pesquiser por um produto ou serviço" />
        </Flex>
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

          <Tabs.Panel value="Tudo">
            <Flex
              direction="column"
              pl={10}
              gap={5}
            >
              {itemsPerCategory.slice(1).map(({ category, items }) => (
                <ItemCategory
                  category={category}
                  items={items.slice(0, 4)}
                  key={category}
                  onClickShowAll={changeTabHandler}
                />
              ))}
            </Flex>
          </Tabs.Panel>
          {/* except the first category (all) */}
          {tab !== 'Tudo' && (
            <Tabs.Panel value={tab}>
              <SimpleGrid cols={4}>
                {currentItems.map((item) => (
                  <ItemCard
                    item={item}
                    key={item.name}
                  />
                ))}
              </SimpleGrid>
            </Tabs.Panel>
          )}
        </Tabs>
      </Flex>
    </Section>
  )
}

export default Catalog
