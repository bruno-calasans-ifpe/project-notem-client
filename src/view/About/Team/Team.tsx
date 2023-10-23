import { Card, Group, Avatar, Image, Title, Text, Flex } from '@mantine/core'
import Section from '../../../components/Section/Section'

function OurTeam() {
  return (
    <Section
      title="Nossa Equipe"
      subtitle="Conheça nossa equipe"
      titleColor="black"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptate maiores excepturi enim ullam
      adipisci explicabo eum repellendus odio architecto, at dolorem possimus aut ratione id quod inventore pariatur
      consequuntur.
      <Flex
        mt="md"
        gap={30}
      >
        <Card
          radius="xl"
          withBorder
        >
          <Image
            src="/imgs/dummy-avatar.svg"
            w={300}
            h={300}
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />

          <Title order={3}>Nome Sobrenome</Title>
          <Title order={6}>Profissão</Title>
          <Text
            size="sm"
            c="dimmed"
            mt="md"
          >
            With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and
            around the fjords of Norway
          </Text>
        </Card>
        <Card withBorder>
          <Image
            src="/imgs/dummy-avatar.svg"
            w={300}
            h={300}
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />

          <Title order={3}>Nome Sobrenome</Title>
          <Title order={6}>Profissão</Title>
          <Text
            size="sm"
            c="dimmed"
            mt="md"
          >
            With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and
            around the fjords of Norway
          </Text>
        </Card>
      </Flex>
    </Section>
  )
}

export default OurTeam
