/* eslint-disable react/require-default-props */
import { ActionIcon, TextInput, Tooltip, Flex } from '@mantine/core'
import { IconX } from '@tabler/icons-react'
import { useState } from 'react'

type SearchProps = {
  value?: string
  placeholder?: string
  onChange?: (search: string) => void
  onReset?: (search: string) => void
}

function Search({ placeholder, value, onChange, onReset }: SearchProps) {
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
      gap={5}
      w="100%"
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
  )
}

export default Search
