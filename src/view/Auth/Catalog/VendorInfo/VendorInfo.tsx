import { Flex, Avatar, Anchor, Text, Divider, Rating } from '@mantine/core'
import { useState } from 'react'
import type { Vendor } from '../../../../types/Vendor'
import RatingsDrawer from './components/RatingsDrawer'
import VendorDrawer from './components/VendorDrawer/VendorDrawer'

type VendorInfoProps = {
  vendor: Vendor
}

function VendorInfo({ vendor }: VendorInfoProps) {
  const [vendorDrawer, setVendorDrawer] = useState(false)
  const [ratingsDrawer, setRatingsDrawer] = useState(false)

  const vendorDrawerHandler = () => {
    setVendorDrawer((curr) => !curr)
  }

  const ratingsDrawerHandler = () => {
    setRatingsDrawer((curr) => !curr)
  }

  return (
    <Flex
      gap={5}
      align="center"
    >
      <Avatar
        src={vendor?.img}
        w={50}
        h={50}
      />
      <Flex
        align="center"
        gap={10}
      >
        <Anchor c="dark">
          <Text
            size="lg"
            fw="bold"
            onClick={vendorDrawerHandler}
            style={{
              cursor: 'pointer',
            }}
          >
            {vendor.name}
          </Text>
        </Anchor>

        <Divider orientation="vertical" />

        <Anchor
          c="dark"
          onClick={ratingsDrawerHandler}
        >
          <Flex
            align="center"
            gap={5}
          >
            <Text>{vendor?.rating}.0</Text>
            <Rating
              value={vendor?.rating}
              count={1}
            />
          </Flex>
        </Anchor>
      </Flex>
      <RatingsDrawer
        opened={ratingsDrawer}
        ratings={vendor.ratings}
        onClose={ratingsDrawerHandler}
        drawerTitle="Avaliações do vendedor"
        subtitle={vendor.name}
      />

      <VendorDrawer
        opened={vendorDrawer}
        vendor={vendor}
        onClose={vendorDrawerHandler}
      />
    </Flex>
  )
}

export default VendorInfo
