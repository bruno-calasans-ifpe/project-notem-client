/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable arrow-body-style */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Flex, Button } from '@mantine/core'
import { IconArrowBackUp } from '@tabler/icons-react'
import Section from '../../../components/Section/Section'
import type { Vendor } from '../../../types/Vendor'
import Search from '../Home/SearchBar/Search/Search'
import type { Item } from '../../../types/Item'
import VendorInfo from './VendorInfo/VendorInfo'
import ItemTabs from './ItemTabs/ItemTabs'

function Catalog() {
  const { name } = useParams()
  const [vendor, setVendor] = useState<Vendor | null>(null)
  const [items, setItems] = useState<Item[]>([])

  const loadVendor = () => {
    if (!name) {
      return
    }
    const loadedVendor: Vendor = {
      name: 'Deide Costa',
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
          user: 'Chupacu',
          commentary: 'Praia muito boa, vei. Tem muitas capivarinhas',
          stars: 5,
          date: '01/01/2023',
        },
      ],
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
        categories: ['Cerveja'],
      },
      {
        name: 'Cerveja de Chocolate',
        price: 100,
        img: 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png',
        type: 'product',
        categories: ['Cerveja'],
      },
      {
        name: 'Cerveja de Pimenta',
        price: 100,
        img: 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png',
        type: 'product',
        categories: ['Cerveja'],
      },
      {
        name: 'Cerveja Amanteigada',
        price: 100,
        img: 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png',
        type: 'product',
        categories: ['Cerveja'],
      },
      {
        name: 'Cerveja Skol',
        price: 100,
        img: 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png',
        type: 'product',
        categories: ['Cerveja'],
      },
      {
        name: 'Espetinho de carne de iguana',
        price: 30,
        img: 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png',
        type: 'product',
        categories: ['Espeto'],
      },
      {
        name: 'Espetinho de carne humana',
        price: 50,
        img: 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png',
        type: 'product',
        categories: ['Espeto'],
      },
      {
        name: 'Camarão ao alho e óleo',
        price: 60,
        img: 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png',
        type: 'product',
        categories: ['Camarão'],
      },
      {
        name: 'Bobó de camarão',
        price: 55,
        img: 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png',
        type: 'product',
        categories: ['Camarão'],
      },
    ]
    setItems(loadedItems)
  }

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
            {vendor && <VendorInfo vendor={vendor} />}
            <Button
              variant="subtle"
              leftSection={<IconArrowBackUp />}
            >
              Voltar à praia
            </Button>
          </Flex>
          <Search placeholder="Pesquiser por um produto ou serviço" />
        </Flex>
        <ItemTabs
          items={items}
          defaultTab="Tudo"
          onClickItem={console.log}
          onFavoriteItem={console.log}
        />
      </Flex>
    </Section>
  )
}

export default Catalog
