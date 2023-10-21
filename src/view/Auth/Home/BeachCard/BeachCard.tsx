/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
import { Text, Card, Image, Group, Button, ActionIcon } from '@mantine/core'
import { IconInfoCircle } from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks'
import BeachModal from '../BeachModal/BeachModal'
import type { Beach } from '../../../../types/Beach'
import ActionIconOverlay from '../../../../components/Overlay/Overlay'

type BeachCardProps = {
  beach: Beach
}

function BeachCard({ beach }: BeachCardProps) {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <BeachModal
        opened={opened}
        close={close}
        beach={beach}
      />
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
      >
        <Card.Section
          className="op"
          onClick={open}
        >
          <Image
            src={beach.images[0]}
            height={150}
            alt="Norway"
          />
        </Card.Section>

        <Group
          justify="space-between"
          mt="md"
          mb="xs"
        >
          <Text
            size="md"
            fw="bold"
          >
            {beach.name}
          </Text>
        </Group>

        <Text
          size="sm"
          c="dimmed"
          style={{
            flexGrow: 1,
          }}
        >
          {beach.location}
        </Text>

        <Button
          variant="light"
          color="blue"
          fullWidth
          mt="md"
          radius="md"
        >
          Selecionar Praia
        </Button>
        <ActionIconOverlay>
          <ActionIcon
            variant="subtle"
            c="snow"
            onClick={open}
          >
            <IconInfoCircle
              style={{ width: 30, height: 30 }}
              stroke={1.5}
            />
          </ActionIcon>
        </ActionIconOverlay>
      </Card>
    </>
  )
}

export default BeachCard
