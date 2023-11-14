import { useState } from 'react'
import { useForm } from '@mantine/form'
import {
  Flex,
  Checkbox,
  Box,
  Button,
  ActionIcon,
  Title,
  Popover,
  Tooltip,
} from '@mantine/core'
import { IconCurrentLocation } from '@tabler/icons-react'
import { LocationOptions } from './Location.type'

function Location() {
  const [open, setOpen] = useState(false)
  const locationForm = useForm<LocationOptions>({
    initialValues: {
      automatic: true,
      visible: true,
    },
  })

  const resetHandler = () => {
    locationForm.reset()
  }

  const openHandler = () => {
    setOpen(!open)
  }

  return (
    <Popover
      opened={open}
      width={250}
      position="bottom-start"
    >
      <Popover.Target>
        <Tooltip label="Localização">
          <ActionIcon
            variant="filled"
            aria-label="Settings"
            size="lg"
            onClick={openHandler}
          >
            <IconCurrentLocation
              style={{ width: '70%', height: '70%' }}
              stroke={1.5}
            />
          </ActionIcon>
        </Tooltip>
      </Popover.Target>
      <Popover.Dropdown>
        <Flex
          direction="column"
          justify="center"
          align="center"
          gap={20}
        >
          <Title order={2}>Localização</Title>
          <Box
            id="map"
            style={{
              border: '2px solid black',
              width: '100%',
              height: 150,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Mapa
          </Box>
          <Checkbox
            label={<Title order={4}>Automática</Title>}
            description="Se não estiver marcado, usará uma localização manual"
            size="sm"
            {...locationForm.getInputProps('automatic')}
            checked={locationForm.values.automatic}
          />
          <Checkbox
            label={<Title order={4}>Ficar visível</Title>}
            description="Você será visto pelos vendedores próximos a partir da localização atual"
            size="sm"
            {...locationForm.getInputProps('visible')}
            checked={locationForm.values.visible}
          />
          <Flex
            justify="space-between"
            w="100%"
          >
            <Button
              variant="light"
              size="compact-sm"
              onClick={resetHandler}
            >
              Resetar
            </Button>
            <Button
              variant="filled"
              size="compact-sm"
              onClick={openHandler}
            >
              Confirmar
            </Button>
          </Flex>
        </Flex>
      </Popover.Dropdown>
    </Popover>
  )
}

export default Location
