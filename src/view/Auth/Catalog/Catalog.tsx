/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable arrow-body-style */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Flex, Button, Text, Image, Card, Breadcrumbs } from '@mantine/core'
import { IconArrowBackUp } from '@tabler/icons-react'
import slugify from 'slugify'
import { Link, useSearchParams } from 'react-router-dom'
import Section from '../../../components/Section/Section'
import type { Vendor } from '../../../types/Vendor'
import Search from '../Home/SearchBar/Search/Search'
import type { Item } from '../../../types/Item'
import VendorInfo from './VendorInfo/VendorInfo'
import ItemTabs from './ItemTabs/ItemTabs'
import ItemBadges from '../Beach/ItemCard/ItemBadges/ItemBadges'

function Catalog() {
  const { name } = useParams()
  const navigate = useNavigate()
  const [search] = useSearchParams()
  const [vendor, setVendor] = useState<Vendor | null>(null)
  const [items, setItems] = useState<Item[]>([])
  const [item, setItem] = useState<Item | null>(null)

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
        category: 'Bebida',
        tags: ['Cerveja', 'Álcool'],
        desc: 'Uma cerveja muito bom pra krai. Ainda mais com óleo de virgem',
        ratings: [
          {
            user: 'Fábio',
            commentary:
              'Vai se fuder. Que praia lixo do krai, nunca mais volto aqui, plmd',
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
      },
      {
        name: 'Cerveja de Chocolate',
        price: 100,
        img: 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png',
        type: 'product',
        category: 'Bebida',
        tags: ['Cerveja'],
        desc: 'Uma cerveja pra sentir o açúcar pulsando na sua boca',
        ratings: [
          {
            user: 'Fábio',
            commentary:
              'Vai se fuder. Que praia lixo do krai, nunca mais volto aqui, plmd',
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
      },
      {
        name: 'Cerveja de Pimenta',
        price: 100,
        img: 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png',
        type: 'product',
        category: 'Bebida',
        tags: ['Cerveja'],
        desc: 'Uma cerveja que esquenta seu rabo',
        ratings: [
          {
            user: 'Fábio',
            commentary:
              'Vai se fuder. Que praia lixo do krai, nunca mais volto aqui, plmd',
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
      },
      {
        name: 'Cerveja Amanteigada',
        price: 100,
        img: 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png',
        type: 'product',
        category: 'Bebida',
        tags: ['Cerveja'],
        desc: 'Uma cerveja pra comer com pão',
        ratings: [
          {
            user: 'Fábio',
            commentary:
              'Vai se fuder. Que praia lixo do krai, nunca mais volto aqui, plmd',
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
      },
      {
        name: 'Cerveja Skol',
        price: 100,
        img: 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png',
        type: 'product',
        category: 'Bebida',
        tags: ['Cerveja'],
        desc: 'Uma cerveja quadrada',
        ratings: [
          {
            user: 'Fábio',
            commentary:
              'Vai se fuder. Que praia lixo do krai, nunca mais volto aqui, plmd',
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
      },
      {
        name: 'Espetinho de carne de iguana',
        price: 30,
        img: 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png',
        type: 'product',
        category: 'Carne',
        tags: ['Espeto'],
        desc: 'Nunca comeu carne de iguana? Será sua primeira vez',
        ratings: [
          {
            user: 'Fábio',
            commentary:
              'Vai se fuder. Que praia lixo do krai, nunca mais volto aqui, plmd',
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
      },
      {
        name: 'Espetinho de carne humana',
        price: 50,
        img: 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png',
        type: 'product',
        category: 'Carne',
        tags: ['Espeto'],
        desc: 'Não me pergunte de onde vem essa carne',
        ratings: [
          {
            user: 'Fábio',
            commentary:
              'Vai se fuder. Que praia lixo do krai, nunca mais volto aqui, plmd',
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
      },
      {
        name: 'Camarão ao alho e óleo',
        price: 60,
        img: 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png',
        type: 'product',
        category: 'Frutos do Mar',
        tags: ['Camarão'],
        desc: 'Quem não adora um bom camarão ao alho e óleo? :P',
        ratings: [
          {
            user: 'Fábio',
            commentary:
              'Vai se fuder. Que praia lixo do krai, nunca mais volto aqui, plmd',
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
      },
      {
        name: 'Bobó de camarão',
        price: 55,
        img: 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png',
        type: 'product',
        category: 'Frutos do Mar',
        tags: ['Camarão'],
        desc: 'Se você nunca comeu bobó de camarão, você é gay',
        ratings: [
          {
            user: 'Fábio',
            commentary:
              'Vai se fuder. Que praia lixo do krai, nunca mais volto aqui, plmd',
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
      },
    ]
    setItems(loadedItems)
  }

  const clickItemHandler = (item: Item) => {
    navigate(`/vendor/${name}?item=${slugify(item.name, { lower: true })}`)
    setItem(item)
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
          <Search placeholder="Pesquisar por um produto ou serviço" />
        </Flex>
        {search.get('item') && item && name ? (
          <Flex
            direction="column"
            justify="center"
            gap={10}
          >
            <Breadcrumbs>
              <Link to={`/vendor/${slugify(name)}`}>Catálogo</Link>
              <Link to={`/vendor/${slugify(name)}?category=${item.category}`}>
                {item.category}
              </Link>
            </Breadcrumbs>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
            >
              <Flex
                direction="column"
                gap={15}
                mt={10}
              >
                <Flex
                  align="center"
                  justify="center"
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    h={200}
                  />
                </Flex>
                <Flex
                  direction="column"
                  justify="space-between"
                  gap={5}
                  mb={5}
                >
                  <Flex>
                    <Text
                      size="lg"
                      fw="bold"
                      c="blue"
                    >
                      {item.name}
                    </Text>
                    <Text>{}</Text>
                  </Flex>
                  <ItemBadges
                    item={item}
                    direction="row"
                    showTags
                  />
                </Flex>

                <Flex direction="column">
                  <Text fw="bold">Preço</Text>
                  <Text
                    c="green"
                    fw="bold"
                  >
                    R$ {item.price}
                  </Text>
                </Flex>

                <Flex direction="column">
                  <Text fw="bold">Descrição</Text>
                  <Text c="dimmed">{item.desc}</Text>
                </Flex>

                <Flex gap={5}>
                  <Button
                    fullWidth
                    bg="green"
                  >
                    Solicitar
                  </Button>
                  <Button
                    variant="outline"
                    fullWidth
                  >
                    Cancelar
                  </Button>
                </Flex>
              </Flex>
            </Card>
          </Flex>
        ) : (
          <ItemTabs
            items={items}
            defaultTab="Tudo"
            onClickItem={clickItemHandler}
            onFavoriteItem={console.log}
          />
        )}
      </Flex>
    </Section>
  )
}

export default Catalog
