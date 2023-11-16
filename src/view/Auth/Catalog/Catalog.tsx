/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable arrow-body-style */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {
  Flex,
  Text,
  Tabs,
  Rating,
  Avatar,
  SimpleGrid,
  Button,
  ActionIcon,
  Anchor,
  Divider,
} from '@mantine/core'
import { IconArrowBackUp, IconInfoCircleFilled } from '@tabler/icons-react'
import Section from '../../../components/Section/Section'
import reverseSlugify from '../../../utils/reverseSlugify'
import type { Vendor } from '../../../types/Vendor'
import Search from '../Home/SearchBar/Search/Search'
import type { Item } from '../../../types/Item'
import ItemCategory from './ItemCategory/ItemCategory'
import ItemCard from '../Beach/ItemCard/ItemCard'
import VendorDrawer from './VendorDrawer/VendorDrawer'

type ItemsCategory = {
  category: string
  items: Item[]
}

function Catalog() {
  const { name } = useParams()
  const [tab, setTab] = useState('Tudo')
  const [vendor, setVendor] = useState<Vendor | null>(null)
  const [items, setItems] = useState<Item[]>([])
  const [vendorDrawer, setVendorDrawer] = useState(false)

  const loadVendor = () => {
    if (!name) {
      return
    }
    const loadedVendor: Vendor = {
      name,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png',
      rating: 5,
      info: {
        about:
          'Sou um vendedor sério que busca semppre dar muito duro naquilo que faz. Já aguentei muita poha nessa vida. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt exercitationem, earum ea accusantium recusandae eos labore nulla perferendis cupiditate tempore iste blanditiis saepe non, facilis voluptatem unde ipsam at doloribus.',
        contacts: {
          whatsapp: '81 9 12345678',
          instagram: 'deide_costa',
          twitter: '@deide_costa1234',
          email: 'deide_costa@email.com',
        },
        paymentMethods: [
          { category: 'Débito', name: 'Mastercard' },
          { category: 'Débito', name: 'Visa' },
          { category: 'Crédito', name: 'Mastercard' },
          { category: 'Crédito', name: 'Visa' },
        ],
      },
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

  const vendorDrawerHandler = () => {
    setVendorDrawer((curr) => !curr)
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
          direction="column"
        >
          <Flex
            justify="space-between"
            align="center"
          >
            <Flex
              gap={5}
              align="center"
            >
              <Avatar
                src={vendor?.img}
                w={50}
                h={50}
              />
              <Flex
                align="center"
                gap={10}
              >
                <Text
                  size="lg"
                  fw="bold"
                  onClick={vendorDrawerHandler}
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  {reverseSlugify(name!)}
                </Text>

                <Flex
                  gap={5}
                  align="center"
                >
                  <Rating
                    count={1}
                    value={vendor?.rating}
                    readOnly
                  />
                  <Text
                    size="lg"
                    fw="400"
                  >
                    {vendor?.rating}.0
                  </Text>
                </Flex>
              </Flex>

              {vendor && (
                <VendorDrawer
                  opened={vendorDrawer}
                  vendor={vendor}
                  onClose={vendorDrawerHandler}
                />
              )}
            </Flex>
            <Button
              variant="subtle"
              leftSection={<IconArrowBackUp />}
            >
              Voltar à praia
            </Button>
          </Flex>
          <Search placeholder="Pesquiser por um produto ou serviço" />
        </Flex>
        <Divider />
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
