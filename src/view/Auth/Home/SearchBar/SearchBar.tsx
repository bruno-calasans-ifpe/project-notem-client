import { Group, ActionIcon, Tooltip } from '@mantine/core'

import { IconCurrentLocation } from '@tabler/icons-react'

import { useState } from 'react'

// components
import Filter from './Filter/Filter'
import Sorter from './Sorter/Sorter'
import Search from './Search/Search'

function SearchBar() {
  const [currentLocation, setCurrentLocation] = useState(false)

  const currentLocationHandler = () => {
    setCurrentLocation(!currentLocation)
  }
  return (
    <Group
      id="beach-search-bar"
      justify="flex-end"
      align="center"
      mt="md"
    >
      {/* Current Location Icon */}
      <Tooltip label="Usar localização atual">
        <ActionIcon
          size="lg"
          onClick={currentLocationHandler}
          bg={currentLocation ? 'green' : 'gray'}
        >
          <IconCurrentLocation />
        </ActionIcon>
      </Tooltip>

      {/* Filter form */}
      <Filter />

      {/* Sort form */}
      <Sorter />

      <Search onChange={console.log} />
    </Group>
  )
}

export default SearchBar
