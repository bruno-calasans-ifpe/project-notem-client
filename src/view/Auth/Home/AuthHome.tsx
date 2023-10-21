/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-else-return */
import { Pagination, SimpleGrid, Grid, Flex, Title, Text } from '@mantine/core'
import { useSetState } from '@mantine/hooks'
import Section from '../../../components/Section/Section'
import useAuthStore from '../../../store/useAuthStore'
import SearchBar from './SearchBar/SearchBar'
import BeachCard from './BeachCard/BeachCard'
import type { Beach } from '../../../types/Beach'

type BeachesPagination = {
  itemsPerPage: number
  currentPage: number
}

function AuthHome() {
  const { user } = useAuthStore()
  const [pagination, setPagination] = useSetState<BeachesPagination>({
    currentPage: 1,
    itemsPerPage: 6,
  })

  const beaches: Beach[] = [
    {
      name: 'Praia da Capivara',
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
          user: user?.name ?? 'Visitante',
          commentary: 'Praia muito boa, vei. Tem muitas capivarinhas',
          stars: 5,
          date: '01/01/2023',
        },
      ],
      userRating: {
        user: user?.name ?? 'Visitante',
        commentary: 'Praia muito boa, vei. Tem muitas capivarinhas',
        stars: 5,
        date: '01/01/2023',
      },
    },
    {
      name: 'Praia da Sebo Seboso',
      location: 'Perto do Sebo',
      distance: 3000,
      danger: 'pouco',
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
      ],
    },
    {
      name: 'Praia da Sebo Seboso',
      location: 'Perto do Sebo',
      distance: 3000,
      danger: 'pouco',
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
      ],
    },
    {
      name: 'Praia da Sebo Seboso',
      location: 'Perto do Sebo',
      distance: 3000,
      danger: 'pouco',
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
      ],
    },
    {
      name: 'Praia da Sebo Seboso',
      location: 'Perto do Sebo',
      distance: 3000,
      danger: 'pouco',
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
      ],
    },
    {
      name: 'Praia da Sebo Seboso',
      location: 'Perto do Sebo',
      distance: 3000,
      danger: 'pouco',
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
      ],
    },
    {
      name: 'Praia da Sebo Seboso',
      location: 'Perto do Sebo',
      distance: 3000,
      danger: 'pouco',
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
      ],
    },
  ]

  const { currentPage, itemsPerPage } = pagination
  const minIndex = itemsPerPage * (currentPage - 1)
  const maxIndex = itemsPerPage * currentPage - 1
  const totalPages = Math.ceil(beaches.length / pagination.itemsPerPage)

  const beachesOnPage = beaches.filter((beach, index) => {
    return index >= minIndex && index <= maxIndex
  })

  const changePage = (page: number) => {
    setPagination({ currentPage: page })
  }

  return (
    <Section
      title="Praias"
      titleColor="black"
    >
      <SearchBar />

      <Grid
        columns={3}
        mt="lg"
        align="center"
        gutter={{
          base: 15,
        }}
      >
        <Grid.Col span={3}>
          <Flex justify="space-between">
            <Text c="dimmed">
              Página {pagination.currentPage} de {totalPages}
            </Text>
            <Text c="dimmed">Mostrando {beachesOnPage.length} item(s)</Text>
          </Flex>
        </Grid.Col>
        {beachesOnPage.map((beach, index) => (
          <Grid.Col
            span={1}
            key={`${beach.name}${index}`}
          >
            <BeachCard beach={beach} />
          </Grid.Col>
        ))}
        <Grid.Col span={3}>
          <Flex
            justify="center"
            p={20}
          >
            <Pagination
              total={totalPages}
              radius="xl"
              withEdges
              onChange={changePage}
            />
          </Flex>
        </Grid.Col>
      </Grid>
    </Section>
  )
}

export default AuthHome
