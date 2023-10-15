import { Card, Image, Text } from '@mantine/core'
import Section from '../../../components/Section/Section'

function AboutUs() {
  return (
    <Section
      title="Quem Somos"
      subtitle="Conheça mais sobre a gente"
      titleColor="black"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto sint consequatur ipsum accusantium iste architecto
      delectus, natus, nobis magni ab dicta minima vitae sed! Animi praesentium ullam illo fugiat autem! Lorem ipsum,
      dolor sit amet consectetur adipisicing elit. Iusto sint consequatur ipsum accusantium iste architecto delectus,
      natus, nobis magni ab dicta minima vitae sed! Animi praesentium ullam illo fugiat autem!
      <Card mt="xl">
        <Card.Section>
          <Image
            src="/public/imgs/beach.jpeg"
            h={300}
            alt="No way!"
          />
        </Card.Section>
        <Text
          fw={500}
          size="lg"
          mt="md"
        >
          Atuamos em muitos lugares que você nem pode imaginar
        </Text>
      </Card>
    </Section>
  )
}

export default AboutUs
