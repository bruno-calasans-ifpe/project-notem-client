/* eslint-disable react/no-unescaped-entities */
// Components
import { Title, Text, Paper } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import Section from './components/Section/Section'

// Layout
import Header from './layout/Header/Header'
import Main from './layout/Main/Main'
import Footer from './layout/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Main>
        <Section title="Onde atuamos">
          <Carousel
            withIndicators
            height="600px"
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
        </Section>
      </Main>
      <Footer />
    </>
  )
}

export default App
