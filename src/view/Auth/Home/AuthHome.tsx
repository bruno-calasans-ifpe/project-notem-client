/* eslint-disable no-else-return */
import { SimpleGrid } from '@mantine/core'
import Section from '../../../components/Section/Section'
import useAuthStore from '../../../store/useAuthStore'
import SearchBar from './SearchBar/SearchBar'
import BeachCard from './BeachCard/BeachCard'

function AuthHome() {
  const { user } = useAuthStore()

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
        <BeachCard
          beach={{
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
                stars: 2,
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
            ],
          }}
          yourRating={{
            user: user ? user.name : 'visitante',
            commentary: 'Praia boazinha pra desovar um corpo :)',
            stars: 4,
            date: '10/10/1999',
          }}
        />

        <BeachCard
          beach={{
            name: 'Praia da Caribe',
            location: 'Perto da Bueiro do seco',
            distance: 2000,
            danger: 'médio',
            images: [
              'https://img.freepik.com/fotos-gratis/fundo-do-mar-e-praia-vazia_74190-313.jpg?w=1380&t=st=1697677676~exp=1697678276~hmac=99eefc06740b0fa91c99eba220fe4513d739507a3b261add0fe50de75f83613e',
              'https://img.freepik.com/fotos-gratis/bela-foto-da-praia-no-algarve-portugal_181624-26718.jpg?w=740&t=st=1697677701~exp=1697678301~hmac=cc2736f418311db9cb2843639b6aaf26a97108e4c54b959a65f43489299a6f9e',
              'https://img.freepik.com/fotos-gratis/bela-paisagem-a-beira-mar_23-2150423956.jpg?w=740&t=st=1697677729~exp=1697678329~hmac=80c1a882fbc276f7ff5c009a777a7589f1da58cb9f3c1a771c845b895df900cc',
            ],
            ratings: [],
          }}
        />
      </SimpleGrid>
    </Section>
  )
}

export default AuthHome
