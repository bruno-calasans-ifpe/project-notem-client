/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unescaped-entities */
// Components
import { Title, Text, Paper, Group, List, ThemeIcon, Button } from '@mantine/core'
import { IconCheck, IconArrowBadgeRightFilled } from '@tabler/icons-react'
import { Carousel } from '@mantine/carousel'
import { Routes, Route } from 'react-router'
import Section from './components/Section/Section'

// Layout
import Header from './layout/Header/Header'
import Main from './layout/Main/Main'
import Footer from './layout/Footer/Footer'

const BeachesFakeData = [
  {
    url: './carousel-imgs/beach1.jpg',
    title: 'Praia da Marinha, Portugal',
    subtitle: 'Between the coastal towns of Lagoa and Carvoeiro sits the "Golden Beach" of Portugal.',
  },
  {
    url: './carousel-imgs/beach2.jpg',
    title: 'Placencia Beach, Belize',
    subtitle: 'Placencia Beach is located off the tip of the Placencia Peninsula along the southeastern tip of Belize.',
  },
  {
    url: './carousel-imgs/beach3.jpg',
    title: 'Navagio Bay, Zakynthos, Greece',
    subtitle:
      'Also known as Shipwreck Cove, Navagio Bay, Zakynthos, Greece touts brilliant blue waters surrounded by towering cliffs.',
  },
  {
    url: './carousel-imgs/beach4.jpg',
    title: 'St. Lucia',
    subtitle:
      'St. Lucia may have world-class beaches, but the beach itself is best known for the massive pitons (mountainous volcanic plugs that are dormant) looming in the background.',
  },
]

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes></Routes>
        <Section
          id="beach-range"
          title="Praias que usam nosso app"
          subtitle="Já atuamos em mais de 1.0000 de praias! Confira algumas delas."
          bgColor="#FB9C31"
        >
          <Carousel
            withIndicators
            height="500px"
            slideGap="sm"
            align="center"
            controlSize={45}
            loop
          >
            {BeachesFakeData.map((beach) => (
              <Carousel.Slide key={beach.title}>
                <Paper
                  shadow="md"
                  p="xl"
                  h="100%"
                  style={{
                    backgroundImage: `url(${beach.url})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                  }}
                >
                  <div>
                    <Title
                      order={2}
                      c="gold"
                      fw="bold"
                      style={{
                        textShadow: '1px 1px 0.5px black',
                      }}
                    >
                      {beach.title}
                    </Title>
                    <Text
                      c="white"
                      fw="bold"
                      style={{
                        textShadow: '1px 1px 0.5px black',
                      }}
                    >
                      {beach.subtitle}
                    </Text>
                  </div>
                </Paper>
              </Carousel.Slide>
            ))}
          </Carousel>
        </Section>
        <Section
          id="our-features"
          title="Recursos do nosso app"
          subtitle="Confira o que temos a oferecer"
          // titleColor="dark"
          // subtitleColor="snow"
          bgColor="#228BE6"
        >
          <Group justify="space-around">
            <Paper
              shadow="md"
              p="xl"
              w="fit-content"
              h="300px"
            >
              <div>
                <Title
                  order={1}
                  c="grape"
                  fw="bold"
                >
                  Cliente
                </Title>
                <List>
                  <List.Item
                    icon={
                      <ThemeIcon
                        color="green"
                        size={24}
                        radius="xl"
                        variant="light"
                      >
                        <IconCheck />
                      </ThemeIcon>
                    }
                  >
                    Pode isso
                  </List.Item>
                  <List.Item
                    icon={
                      <ThemeIcon
                        color="green"
                        size={24}
                        radius="xl"
                        variant="light"
                      >
                        <IconCheck />
                      </ThemeIcon>
                    }
                  >
                    Pode isso
                  </List.Item>
                  <List.Item
                    icon={
                      <ThemeIcon
                        color="green"
                        size={24}
                        radius="xl"
                        variant="light"
                      >
                        <IconCheck />
                      </ThemeIcon>
                    }
                  >
                    Pode isso
                  </List.Item>
                  <List.Item
                    icon={
                      <ThemeIcon
                        color="green"
                        size={24}
                        radius="xl"
                        variant="light"
                      >
                        <IconCheck />
                      </ThemeIcon>
                    }
                  >
                    Pode isso
                  </List.Item>
                </List>
                <br />
                <Button
                  component="a"
                  href="/register?type=client"
                  bg="grape"
                  fullWidth
                  rightSection={<IconArrowBadgeRightFilled />}
                >
                  <Text fw="bold">Quero ser Cliente</Text>
                </Button>
              </div>
            </Paper>
            <Paper
              shadow="md"
              p="xl"
              w="fit-content"
              h="300px"
            >
              <div>
                <Title
                  order={1}
                  c="indigo"
                  fw="bold"
                >
                  Vendedor
                </Title>
                <List>
                  <List.Item
                    icon={
                      <ThemeIcon
                        color="green"
                        size={24}
                        radius="xl"
                        variant="light"
                      >
                        <IconCheck />
                      </ThemeIcon>
                    }
                  >
                    Pode isso
                  </List.Item>
                  <List.Item
                    icon={
                      <ThemeIcon
                        color="green"
                        size={24}
                        radius="xl"
                        variant="light"
                      >
                        <IconCheck />
                      </ThemeIcon>
                    }
                  >
                    Pode isso
                  </List.Item>
                  <List.Item
                    icon={
                      <ThemeIcon
                        color="green"
                        size={24}
                        radius="xl"
                        variant="light"
                      >
                        <IconCheck />
                      </ThemeIcon>
                    }
                  >
                    Pode isso
                  </List.Item>
                  <List.Item
                    icon={
                      <ThemeIcon
                        color="green"
                        size={24}
                        radius="xl"
                        variant="light"
                      >
                        <IconCheck />
                      </ThemeIcon>
                    }
                  >
                    Pode isso
                  </List.Item>
                </List>
                <br />
                <Button
                  component="a"
                  href="/register?type=vendor"
                  bg="indigo"
                  fullWidth
                  rightSection={<IconArrowBadgeRightFilled />}
                >
                  <Text fw="bold">Quero ser Vendedor</Text>
                </Button>
              </div>
            </Paper>
          </Group>
        </Section>
      </Main>
      <Footer />
    </>
  )
}

export default App
