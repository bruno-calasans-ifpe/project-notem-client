/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import { Flex, Group, Text, Image, Rating } from '@mantine/core'
import { Link } from 'react-router-dom'
import CustomCarousel from '../../../../../components/CustomCarousel/CustomCarousel'
import ItemCard from '../../../../../components/ItemCard/ItemCard'
import type { Item } from '../../../../../types/Item'
import type { Vendor } from '../../../../../types/Vendor'

type VendorItemsProps = {
  vendor: Vendor
  items: Item[]
}

function VendorItems({ vendor, items }: VendorItemsProps) {
  const itemsPerScroll = 4
  return (
    <Flex
      id="vendor-items"
      direction="column"
      gap={15}
      maw={800}
    >
      <Group>
        <Image
          src={vendor.img}
          alt={vendor.name}
          radius="xl"
          w={50}
          h={50}
        />
        <Flex direction="column">
          <Link
            to={`/vendor/${vendor.id}`}
            style={{ color: 'black' }}
          >
            <Text fw="bold">{vendor.name}</Text>
          </Link>
          <Group
            justify="flex-start"
            gap={5}
          >
            <Text>{vendor.rating}.0</Text>
            <Rating
              value={vendor.rating}
              readOnly
            />
          </Group>
        </Flex>
      </Group>
      <CustomCarousel
        items={items.map((item) => (
          <Link
            to={`/vendor/${vendor.id}?item=${item.id}`}
            key={item.name}
          >
            <ItemCard
              item={item}
              key={item.name}
            />
          </Link>
        ))}
        loop
        height="100%"
        slideSize="20%"
        slideGap="md"
        align="start"
        controlsOffset="xs"
        slidesToScroll={itemsPerScroll}
        withControls={items.length > itemsPerScroll}
      />
    </Flex>
  )
}

export default VendorItems
