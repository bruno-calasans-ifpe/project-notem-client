/* eslint-disable react/require-default-props */
import { ActionIcon, TextInput, Tooltip, Flex, Text } from '@mantine/core'
import { IconX } from '@tabler/icons-react'
import { useState } from 'react'

type SearchProps = {
  value?: string
  placeholder?: string
  showResult?: boolean
  onChange?: (search: string) => void
  onReset?: (search: string) => void
}

function Search({ placeholder, value, showResult, onChange, onReset }: SearchProps) {
  const [search, setSearch] = useState('')

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    setSearch(text)
    if (onChange) {
      onChange(text)
    }
  }

  const clearSearchHandler = () => {
    setSearch('')
    if (onReset) {
      onReset(search)
    }
  }

  return (
    <Flex
      direction="column"
      gap={10}
      w="100%"
    >
      <Flex
        direction="row"
        gap={5}
      >
        {/* Input Search */}
        <TextInput
          value={value ?? search}
          onChange={searchHandler}
          size="sm"
          radius="sm"
          placeholder={placeholder ?? 'Pesquise por algo'}
          style={{
            flexGrow: 1,
          }}
        />

        {/* Clear Input Icon */}
        {search && (
          <Tooltip
            label="Limpar pesquisa"
            onClick={clearSearchHandler}
          >
            <ActionIcon
              variant="light"
              size="lg"
              c="red"
            >
              <IconX />
            </ActionIcon>
          </Tooltip>
        )}
      </Flex>

      {search && showResult && (
        <Flex gap={5}>
          <Text
            size="lg"
            fw="bold"
          >
            Resultados para
          </Text>
          <Text
            size="lg"
            fw="bold"
            c="red"
          >
            {search}
          </Text>
        </Flex>
      )}
    </Flex>
  )
}

export default Search
