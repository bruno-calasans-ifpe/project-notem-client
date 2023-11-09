/* eslint-disable react/require-default-props */
import { useSetState } from '@mantine/hooks'
import { useForm } from '@mantine/form'
import {
  Group,
  ActionIcon,
  Tooltip,
  Popover,
  Select,
  Title,
  Button,
  Text,
} from '@mantine/core'
import { IconArrowsSort } from '@tabler/icons-react'
import { orderBy, orderDirections, SortState, SortOptions } from './Sorter.type'

type SortProps = {
  onApply?: (order: SortState) => void
  onReset?: (order: SortState) => void
  onChange?: (order: SortState) => void
}

function Sorter({ onApply, onChange, onReset }: SortProps) {
  const [sort, setSort] = useSetState<SortState>({
    opened: false,
    applied: false,
    options: {},
  })

  const sortForm = useForm<SortOptions>({
    initialValues: {
      orderBy: orderBy[0],
      direction: orderDirections[0],
    },
  })

  const sortHandler = () => {
    setSort({ opened: !sort.opened })
    if (onChange) {
      onChange(sort)
    }
  }

  const applySortHandler = () => {
    setSort({ applied: true, options: sortForm.values })
    if (onApply) {
      onApply(sort)
    }
  }

  const resetSortHandler = () => {
    sortForm.reset()
    setSort({ applied: false, options: {} })
    if (onReset) {
      onReset(sort)
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Popover opened={sort.opened}>
        <Popover.Target>
          <Tooltip label="Ordenar">
            <ActionIcon
              size="lg"
              onClick={sortHandler}
              bg={sort.applied ? 'green' : 'gray'}
            >
              <IconArrowsSort />
            </ActionIcon>
          </Tooltip>
        </Popover.Target>
        <Popover.Dropdown>
          <Title order={2}>Ordenador</Title>
          <Text c="dimmed">
            {sort.applied ? 'Ordenação aplicada' : 'Nenhuma ordenação aplicada'}
          </Text>
          <Select
            label="Ordenar por"
            mt="md"
            data={orderBy as unknown as string[]}
            allowDeselect={false}
            {...sortForm.getInputProps('orderBy')}
          />

          <Select
            label="Na ordem"
            mt="md"
            allowDeselect={false}
            data={orderDirections as unknown as string[]}
            {...sortForm.getInputProps('direction')}
          />

          <Group justify="flex-end">
            <Button
              mt="lg"
              size="compact-sm"
              variant="light"
              onClick={resetSortHandler}
            >
              Limpar ordenação
            </Button>
            <Button
              mt="lg"
              size="compact-sm"
              onClick={applySortHandler}
            >
              Ordenar
            </Button>
          </Group>
        </Popover.Dropdown>
      </Popover>
    </form>
  )
}

export default Sorter
