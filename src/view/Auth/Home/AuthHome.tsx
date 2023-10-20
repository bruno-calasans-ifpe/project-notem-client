/* eslint-disable no-else-return */
import { SimpleGrid } from '@mantine/core'
import Section from '../../../components/Section/Section'
import useAuthStore from '../../../store/useAuthStore'
import SearchBar from './SearchBar/SearchBar'
import BeachCard from './BeachCard/BeachCard'
import type { Beach } from '../../../types/Beach'

function AuthHome() {
  const { user } = useAuthStore()
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
  ]

  return (
    <Section
      title="Praias"
      titleColor="black"
    >
      <SearchBar />
      <SimpleGrid
        cols={3}
        mt="lg"
      >
        {beaches.map((beach) => (
          <BeachCard
            beach={beach}
            key={beach.name}
          />
        ))}
      </SimpleGrid>
    </Section>
  )
}

export default AuthHome
