/* eslint-disable react/require-default-props */
import { useSetState } from '@mantine/hooks'
import { useForm } from '@mantine/form'
import {
  Group,
  ActionIcon,
  Tooltip,
  Popover,
  Select,
  MultiSelect,
  Title,
  Button,
  NumberInput,
  Text,
} from '@mantine/core'
import { IconFilter } from '@tabler/icons-react'
import { dangerTypes, FilterState, FilterOptions } from './Filter.type'

type FilterProps = {
  onApply?: (filter: FilterState) => void
  onReset?: (filter: FilterState) => void
  onChange?: (filter: FilterState) => void
}

function Filter({ onApply, onChange, onReset }: FilterProps) {
  const [filter, setFilter] = useSetState<FilterState>({
    opened: false,
    applied: false,
    options: {},
  })

  const filterForm = useForm<FilterOptions>({
    initialValues: {
      distance: 0,
      danger: dangerTypes[0],
    },
  })

  // Filter actions
  const filterHandler = () => {
    setFilter({ opened: !filter.opened })
    if (onChange) {
      onChange(filter)
    }
  }

  const applyFilterHandler = () => {
    setFilter({ applied: true, options: filterForm.values })
    if (onApply) {
      onApply(filter)
    }
  }

  const resetFilerHandler = () => {
    filterForm.reset()
    setFilter({ applied: false, options: {} })
    if (onReset) {
      onReset(filter)
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Popover opened={filter.opened}>
        <Popover.Target>
          <Tooltip label="Filtrar">
            <ActionIcon
              size="lg"
              onClick={filterHandler}
              bg={filter.applied ? 'green' : 'gray'}
            >
              <IconFilter />
            </ActionIcon>
          </Tooltip>
        </Popover.Target>

        <Popover.Dropdown>
          <Title order={2}>Filtro</Title>
          <Text c="dimmed">
            {filter.applied ? 'Filtro aplicado' : 'Nenhum filtro aplicado'}
          </Text>
          <MultiSelect
            mt="md"
            label="Por produto"
            placeholder="Um ou mais produtos"
            data={['Caviar', 'Salmão', 'Marisco', 'Prancha de Surf']}
            searchable
            nothingFoundMessage="Nenhum produto encontrado"
            {...filterForm.getInputProps('products')}
          />

          <MultiSelect
            mt="md"
            label="Por serviço"
            placeholder="Um ou mais serviços"
            data={['Aluguel de Barco', 'Surf', 'Aluguel de Lancha']}
            searchable
            nothingFoundMessage="Nenhum serviço encontrado"
            {...filterForm.getInputProps('services')}
          />

          <Select
            mt="md"
            label="Nível de Periculosidade"
            allowDeselect={false}
            data={dangerTypes as unknown as string[]}
            {...filterForm.getInputProps('danger')}
          />

          <NumberInput
            mt="md"
            label="Distância até (metros)"
            clampBehavior="strict"
            step={50}
            min={0}
            {...filterForm.getInputProps('distance')}
          />

          <Group justify="flex-end">
            <Button
              mt="lg"
              size="compact-sm"
              variant="light"
              onClick={resetFilerHandler}
            >
              Limpar filtro
            </Button>
            <Button
              mt="lg"
              size="compact-sm"
              onClick={applyFilterHandler}
            >
              Aplicar Filtro
            </Button>
          </Group>
        </Popover.Dropdown>
      </Popover>
    </form>
  )
}

export default Filter
