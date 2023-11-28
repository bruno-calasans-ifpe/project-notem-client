/* eslint-disable react/require-default-props */
import { Tabs, Text, Flex, SimpleGrid } from '@mantine/core'
import { useState } from 'react'
import { Vendor } from '../../../../types/Vendor'
import VendorCard from './components/VendorCard'
import VendorItems from './components/VendorItems'

type ItemsVendorsTabProps = {
  vendors: Vendor[]
  value?: string
  onChange?: (tab: string) => void
}

function ItemsVendorsTab({ value, vendors, onChange }: ItemsVendorsTabProps) {
  const [tab, setTab] = useState<string | null>('items')

  return (
    <Tabs
      variant="default"
      radius="sm"
      value={value ?? tab}
      onChange={onChange ?? setTab}
    >
      <Tabs.List mb={20}>
        <Tabs.Tab value="items">
          <Text fw="bold">Items</Text>
        </Tabs.Tab>
        <Tabs.Tab value="vendors">
          <Text fw="bold">Vendedores</Text>
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel
        id="vendor-items"
        value="items"
        pl={10}
      >
        <Flex
          direction="column"
          gap={30}
        >
          {vendors.map((vendor) => (
            <VendorItems
              vendor={vendor}
              items={vendor.items}
              key={vendor.name}
            />
          ))}
        </Flex>
      </Tabs.Panel>

      <Tabs.Panel
        id="vendors"
        value="vendors"
        pl={10}
        style={{
          justifyContent: 'space-between',
        }}
      >
        <SimpleGrid cols={3}>
          {vendors.map((vendor) => (
            <VendorCard
              vendor={vendor}
              key={vendor.name}
            />
          ))}
        </SimpleGrid>
      </Tabs.Panel>
    </Tabs>
  )
}

export default ItemsVendorsTab
