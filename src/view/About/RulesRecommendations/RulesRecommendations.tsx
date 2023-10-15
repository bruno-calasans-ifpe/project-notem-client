import { Divider, Flex, Group, Text, Title, Image } from '@mantine/core'
import Section from '../../../components/Section/Section'

function RulesRecommendations() {
  return (
    <Flex direction="column">
      <Section
        title="Regras e Recomendações"
        titleColor="black"
      >
        <Flex
          direction="row"
          justify="space-between"
          gap={10}
        >
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ad vitae maxime maiores nesciunt consequatur
            animi, quibusdam omnis autem consequuntur vel, obcaecati ipsa magni fuga, totam nulla? Eum, quas optio.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ad vitae maxime maiores nesciunt consequatur
            animi, quibusdam omnis autem consequuntur vel, obcaecati ipsa magni fuga, totam nulla? Eum, quas optio.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ad vitae maxime maiores nesciunt consequatur
            animi, quibusdam omnis autem consequuntur vel, obcaecati ipsa magni fuga, totam nulla? Eum, quas optio.
          </Text>
          <Image
            src="/imgs/guideline2.svg"
            h={300}
          />
        </Flex>
      </Section>

      {/* <Divider variant="dotted" /> */}

      <Section
        title="Clientes"
        titleColor="black"
      >
        <Group mt="md">
          <Title order={2}>Não faça isso</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ad vitae maxime maiores nesciunt consequatur
            animi, quibusdam omnis autem consequuntur vel, obcaecati ipsa magni fuga, totam nulla? Eum, quas optio.
          </Text>
        </Group>

        <Group mt="md">
          <Title order={2}>Não faça num sei o quê</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ad vitae maxime maiores nesciunt consequatur
            animi, quibusdam omnis autem consequuntur vel, obcaecati ipsa magni fuga, totam nulla? Eum, quas optio.
          </Text>
        </Group>

        <Group mt="md">
          <Title
            order={2}
            c="indigo"
          >
            Recomendações
          </Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ad vitae maxime maiores nesciunt consequatur
            animi, quibusdam omnis autem consequuntur vel, obcaecati ipsa magni fuga, totam nulla? Eum, quas optio.
          </Text>
        </Group>
      </Section>

      <Section
        title="Vendedores"
        // subtitle="O que o vendedor pode ou não fazer"
        titleColor="black"
      >
        <Group mt="md">
          <Title order={2}>Não faça isso</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ad vitae maxime maiores nesciunt consequatur
            animi, quibusdam omnis autem consequuntur vel, obcaecati ipsa magni fuga, totam nulla? Eum, quas optio.
          </Text>
        </Group>

        <Group mt="md">
          <Title order={2}>Não faça num sei o quê</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ad vitae maxime maiores nesciunt consequatur
            animi, quibusdam omnis autem consequuntur vel, obcaecati ipsa magni fuga, totam nulla? Eum, quas optio.
          </Text>
        </Group>

        <Group mt="md">
          <Title
            order={2}
            c="indigo"
          >
            Recomendações
          </Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ad vitae maxime maiores nesciunt consequatur
            animi, quibusdam omnis autem consequuntur vel, obcaecati ipsa magni fuga, totam nulla? Eum, quas optio.
          </Text>
        </Group>
      </Section>
    </Flex>
  )
}

export default RulesRecommendations
