/* eslint-disable react/no-unescaped-entities */
// Components
import { Title, Text, Paper } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
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
        <Section
          title="Onde já atuamos"
          subtitle="Já atuamos em mais de 1.0000 de praias! Confira algumas delas."
          bgColor="#FFAC29"
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
        {/* <Section
          title="Para quem é esse app?"
          subtitle="Confira os benefícios desse app"
          bgColor="#ac7a42"
        >
          <Carousel
            withIndicators
            height="400px"
            slideGap="sm"
            align="center"
            loop
          >
            <Carousel.Slide h="100%">
              <Paper
                shadow="md"
                p="xl"
                h="100%"
                w="100%"
                style={{
                  backgroundImage: 'url("/carousel-imgs/beach1.jpg")',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundAttachment: 'fixed',
                  backgroundSize: 'cover',
                }}
              >
                <div>
                  <Title
                    order={2}
                    c="white"
                  >
                    Praia da Marinha, Portugal
                  </Title>
                  <Text
                    c="pink"
                    fw="bold"
                    size="lg"
                  >
                    Between the coastal towns of Lagoa and Carvoeiro sits the "Golden Beach" of Portugal.
                  </Text>
                </div>
              </Paper>
            </Carousel.Slide>
            <Carousel.Slide>
              <Paper
                shadow="md"
                p="xl"
                radius="md"
                h="100%"
                style={{
                  backgroundImage: 'url("/carousel-imgs/beach1.jpg")',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundAttachment: 'fixed',
                  backgroundSize: 'cover',
                }}
              >
                <div>
                  <Title
                    order={2}
                    c="white"
                  >
                    Placencia Beach, Belize
                  </Title>
                  <Text
                    c="pink"
                    fw="bold"
                    size="lg"
                  >
                    Placencia Beach is located off the tip of the Placencia Peninsula along the southeastern tip of
                    Belize
                  </Text>
                </div>
              </Paper>
            </Carousel.Slide>
            <Carousel.Slide>
              <Paper
                shadow="md"
                p="xl"
                radius="md"
                h="100%"
                style={{
                  backgroundImage: 'url("/carousel-imgs/beach2.jpg")',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundAttachment: 'fixed',
                  backgroundSize: 'cover',
                }}
              >
                <div>
                  <Title
                    order={2}
                    c="white"
                  >
                    Navagio Bay, Zakynthos, Greece
                  </Title>
                  <Text
                    c="pink"
                    fw="bold"
                    size="lg"
                  >
                    Also known as Shipwreck Cove, Navagio Bay, Zakynthos, Greece touts brilliant blue waters surrounded
                    by towering cliffs.
                  </Text>
                </div>
              </Paper>
            </Carousel.Slide>
            <Carousel.Slide>
              <Paper
                shadow="md"
                p="xl"
                radius="md"
                h="100%"
                style={{
                  backgroundImage: 'url("/carousel-imgs/beach3.jpg")',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundAttachment: 'fixed',
                  backgroundSize: 'cover',
                }}
              >
                <div>
                  <Title
                    order={2}
                    c="white"
                  >
                    St. Lucia
                  </Title>
                  <Text
                    c="pink"
                    fw="bold"
                    size="lg"
                  >
                    St. Lucia may have world-class beaches, but the beach itself is best known for the massive pitons
                    (mountainous volcanic plugs that are dormant) looming in the background. Talk about a beautiful
                    backdrop.
                  </Text>
                </div>
              </Paper>
            </Carousel.Slide>
          </Carousel>
        </Section> */}
      </Main>
      <Footer />
    </>
  )
}

export default App
