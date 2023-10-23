/* eslint-disable react/require-default-props */
import { ActionIcon, TextInput, Tooltip } from '@mantine/core'
import { IconX } from '@tabler/icons-react'
import { useState } from 'react'

type SearchProps = {
  onChange?: (search: string) => void
  onReset?: (search: string) => void
}

function Search({ onChange, onReset }: SearchProps) {
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
    <>
      {/* Input Search */}
      <TextInput
        value={search}
        onChange={searchHandler}
        size="sm"
        radius="sm"
        placeholder="Pesquisar praia por nome ou localização"
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
    </>
  )
}

export default Search
