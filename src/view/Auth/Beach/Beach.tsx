/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Flex, Button, Tabs, SimpleGrid, Text, Group } from '@mantine/core'
import { IconArrowBackUp } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import Section from '../../../components/Section/Section'
import { Beach } from '../../../types/Beach'
import Location from './Location/Location'
import reverseSlugify from '../../../utils/reverseSlugify'
import VendorItems from './VendorItems/VendorItems'
import VendorCard from './VendorCard/VendorCard'
import type { Item } from '../../../types/Item'
import type { Vendor } from '../../../types/Vendor'
import Search from '../Home/SearchBar/Search/Search'
import Sorter from '../Home/SearchBar/Sorter/Sorter'

type ItemsPerVendor = {
  vendor: Vendor
  items: Item[]
}

type PossibleTabs = 'items' | 'vendors'

function SelectedBeach() {
  const { name } = useParams()
  const [loading, setLoading] = useState(false)
  const [beach, setBeach] = useState<Beach | null>(null)
  const [search, setSearch] = useState('')
  const [tab, setTab] = useState<PossibleTabs>('items')

  // todo api to get beach by name
  const loadBeach = () => {
    setLoading(true)
    const loadedBeach: Beach = {
      name: reverseSlugify(name!),
      location: 'Fundo da capivara',
      distance: 5000,
      danger: 'muito',
      images: [
        'https://images.unsplash.com/photo-1603477849227-705c424d1d80?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJvcGljYWwlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D&w=1000',
        'https://images.saymedia-content.com/.image/t_share/MTc2MjY4NDcxMDE2OTU3MTAx/tropical-beach-pictures.jpg',
        'https://w0.peakpx.com/wallpaper/389/769/HD-wallpaper-tropical-beach-nature-beaches-tropical-palm-trees-sand.jpg',
      ],
      ratings: [
        {
          user: 'Fábio',
          commentary: 'Vai se fuder. Que praia lixo do krai, nunca mais volto aqui, plmd',
          stars: 1,
          date: '11/09/2005',
        },
        {
          user: 'Ana',
          commentary: 'Praia muito boa, slk',
          stars: 4,
          date: '12/05/2009',
        },

        {
          user: 'Coringa',
          commentary: 'Bem, praia muito boa para certas coisa >:)',
          stars: 5,
          date: '12/05/2009',
        },
        {
          user: 'Claudio',
          commentary: 'Bem, praia muito boa para certas coisa >:)',
          stars: 5,
          date: '12/05/2009',
        },
        {
          user: 'Visitante',
          commentary: 'Praia muito boa, vei. Tem muitas capivarinhas',
          stars: 5,
          date: '01/01/2023',
        },
      ],
      userRating: {
        user: 'Visitante',
        commentary: 'Praia muito boa, vei. Tem muitas capivarinhas',
        stars: 5,
        date: '01/01/2023',
      },
    }
    setBeach(loadedBeach)
    setLoading(false)
  }

  const favoriteItemHandler = (item: Item, vendor: Vendor) => {
    console.log(item, vendor)
  }

  useEffect(() => {
    if (name) {
      loadBeach()
    }
  }, [name])

  const vendorItems: ItemsPerVendor[] = [
    {
      vendor: {
        name: 'Thiago Costa',
        img: 'https://www.svgrepo.com/show/350417/user-circle.svg',
        rating: 5,
      },
      items: [
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
          name: 'Cerveja Gourmet',
          price: 100,
          img: 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png',
          type: 'product',
          categories: ['cerveja'],
        },
        {
          name: 'Cerveja Amanteigada',
          price: 80,
          img: 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png',
          type: 'product',
          categories: ['cerveja'],
        },
        {
          name: 'Cerveja de Pedra',
          price: 60,
          img: 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png',
          type: 'product',
          categories: ['cerveja'],
        },
      ],
    },
    {
      vendor: {
        name: 'Thomas Turbando',
        img: 'https://www.svgrepo.com/show/350417/user-circle.svg',
        rating: 1,
      },
      items: [
        {
          name: 'Cerveja Gourmet',
          price: 100,
          img: 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png',
          type: 'product',
          categories: ['cerveja'],
        },
        {
          name: 'Aula de Cerveja',
          price: 100,
          img: 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png',
          type: 'service',
          categories: ['cerveja'],
        },
      ],
    },
    {
      vendor: {
        name: 'Paula Tejando',
        img: 'https://www.svgrepo.com/show/350417/user-circle.svg',
        rating: 3,
      },
      items: [
        {
          name: 'Aula de Cerveja',
          price: 100,
          img: 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png',
          type: 'service',
          categories: ['cerveja'],
        },
      ],
    },
  ]

  return (
    <Section
      title={beach?.name ?? 'Praia Selecionada'}
      titleColor="black"
      subtitle={beach?.location}
    >
      <Flex
        direction="column"
        justify="space-between"
        gap={10}
      >
        <Flex
          direction="row"
          justify="flex-end"
        >
          <Link to="/">
            <Button
              variant="subtle"
              leftSection={<IconArrowBackUp />}
            >
              Selecionar outra praia
            </Button>
          </Link>
        </Flex>

        <Flex
          direction="column"
          gap={20}
        >
          <Flex gap={5}>
            <Flex
              direction="row"
              justify="space-between"
              gap={5}
            >
              <Location />
              <Sorter data={['preço', 'avaliação']} />
            </Flex>
            <Search
              value={search}
              placeholder={
                tab === 'items'
                  ? 'Pesquise por um produto ou serviço'
                  : 'Pesquise por um vendedor'
              }
              onChange={setSearch}
              onReset={() => setSearch('')}
            />
          </Flex>
          {search && (
            <Flex gap={5}>
              <Text
                size="lg"
                fw="bold"
              >
                Resultados para
              </Text>
              <Text
                size="lg"
                fw="bold"
                c="red"
              >
                {search}
              </Text>
            </Flex>
          )}
        </Flex>

        <Tabs
          variant="default"
          defaultValue={tab}
          radius="sm"
          onChange={(value) => setTab(value as PossibleTabs)}
        >
          <Tabs.List mb={20}>
            <Tabs.Tab value="items">
              <Text fw="bold">Items</Text>
            </Tabs.Tab>
            <Tabs.Tab value="vendors">
              <Text fw="bold">Vendedores</Text>
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel
            id="vendor-items"
            value="items"
            pl={10}
          >
            <Flex
              direction="column"
              gap={10}
            >
              {vendorItems.map(({ vendor, items }) => (
                <VendorItems
                  vendor={vendor}
                  items={items}
                  onFavoriteItem={favoriteItemHandler}
                  key={vendor.name}
                />
              ))}
            </Flex>
          </Tabs.Panel>

          <Tabs.Panel
            id="vendors"
            value="vendors"
            pl={10}
            style={{
              justifyContent: 'space-between',
            }}
          >
            <SimpleGrid cols={3}>
              {vendorItems.map(({ vendor }) => (
                <VendorCard
                  vendor={vendor}
                  key={vendor.name}
                />
              ))}
            </SimpleGrid>
          </Tabs.Panel>
        </Tabs>
      </Flex>
    </Section>
  )
}

export default SelectedBeach
