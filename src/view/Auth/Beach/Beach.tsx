/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Flex, Button } from '@mantine/core'
import { IconArrowBackUp } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import Section from '../../../components/Section/Section'
import { Beach } from '../../../types/Beach'
import LocationConfig from './LocationConfig/LocationConfig'
import reverseSlugify from '../../../utils/reverseSlugify'

function SelectedBeach() {
  const { name } = useParams()
  const [loading, setLoading] = useState(false)
  const [beach, setBeach] = useState<Beach | null>(null)

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

  useEffect(() => {
    if (name) {
      loadBeach()
    }
  }, [name])

  return (
    <Section
      title={beach?.name ?? 'Praia Selecionada'}
      titleColor="black"
      subtitle={beach?.location}
    >
      <Flex
        direction="column"
        justify="space-between"
        gap={20}
      >
        <Flex
          direction="row"
          justify="space-between"
        >
          <Flex
            direction="row"
            justify="space-between"
            gap={50}
          >
            <LocationConfig />
          </Flex>
          <Link to="/">
            <Button
              variant="subtle"
              leftSection={<IconArrowBackUp />}
            >
              Selecionar outra praia
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Section>
  )
}

export default SelectedBeach
