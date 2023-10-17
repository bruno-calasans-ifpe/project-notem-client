import { Divider, Group, Text, Title } from '@mantine/core'
import Section from '../../../components/Section/Section'

function privacy() {
  return (
    <Section
      title="Política de Privacidade"
      titleColor="black"
    >
      <Text
        size="sm"
        c="dimmed"
      >
        Última atualização: 05/10/2023
      </Text>
      <Text mt="md">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around
        the fjords of Norway
      </Text>

      <Group mt="xl">
        <Title order={2}>Dados que coletamos</Title>
        <Text size="lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ad vitae maxime maiores nesciunt consequatur
          animi, quibusdam omnis autem consequuntur vel, obcaecati ipsa magni fuga, totam nulla? Eum, quas optio.
        </Text>
      </Group>

      <Group mt="xl">
        <Title order={2}>O que fazemos com os seus dados</Title>
        <Text size="lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ad vitae maxime maiores nesciunt consequatur
          animi, quibusdam omnis autem consequuntur vel, obcaecati ipsa magni fuga, totam nulla? Eum, quas optio.
        </Text>
      </Group>

      <Group mt="xl">
        <Title order={2}>Dados que não coletamos</Title>
        <Text size="lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ad vitae maxime maiores nesciunt consequatur
          animi, quibusdam omnis autem consequuntur vel, obcaecati ipsa magni fuga, totam nulla? Eum, quas optio.
        </Text>
      </Group>

      <Group mt="xl">
        <Title order={2}>Informações que você nos fornece</Title>
        <Text size="lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ad vitae maxime maiores nesciunt consequatur
          animi, quibusdam omnis autem consequuntur vel, obcaecati ipsa magni fuga, totam nulla? Eum, quas optio.
        </Text>
      </Group>

      <Group mt="xl">
        <Title order={2}>Informações que colocamos no seu dispositivo</Title>
        <Text size="lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ad vitae maxime maiores nesciunt consequatur
          animi, quibusdam omnis autem consequuntur vel, obcaecati ipsa magni fuga, totam nulla? Eum, quas optio.
        </Text>
      </Group>

      <Group mt="xl">
        <Title order={2}>Mudanças de Política de Privacidade</Title>
        <Text size="lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ad vitae maxime maiores nesciunt consequatur
          animi, quibusdam omnis autem consequuntur vel, obcaecati ipsa magni fuga, totam nulla? Eum, quas optio.
        </Text>
      </Group>
    </Section>
  )
}

export default privacy
