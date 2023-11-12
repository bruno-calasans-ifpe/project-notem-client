/* eslint-disable react/no-unused-prop-types */
import { Flex, Group, Text, Image, Rating } from '@mantine/core'
import { Link, useNavigate } from 'react-router-dom'
import CustomCarousel from '../../../../components/CustomCarousel/CustomCarousel'
import ItemCard from '../ItemCard/ItemCard'
import type { Item } from '../../../../types/Item'
import type { Vendor } from '../../../../types/Vendor'
import slug from '../../../../utils/slug'

type VendorItemsProps = {
  vendor: Vendor
  items: Item[]
  onFavoriteItem: (item: Item, vendor: Vendor) => void
}

function VendorItems({ vendor, items, onFavoriteItem }: VendorItemsProps) {
  const itemsPerScroll = 4
  const navigate = useNavigate()

  const favoriteItemHandler = (item: Item) => {
    onFavoriteItem(item, vendor)
  }

  const clickItemHandler = (item: Item) => {
    navigate(`/vendor/${slug(vendor.name)}/${slug(item.name)}`)
  }

  return (
    <Flex
      direction="column"
      gap={15}
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
          <Link to={`/vendor/${slug(vendor.name)}`}>
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
          <ItemCard
            item={item}
            onFavorite={favoriteItemHandler}
            onClick={clickItemHandler}
            key={item.name}
          />
        ))}
        height="100%"
        slideSize="25%"
        slideGap="md"
        loop
        align="start"
        slidesToScroll={itemsPerScroll}
        controlsOffset="xs"
        withControls={items.length > itemsPerScroll}
      />
    </Flex>
  )
}

export default VendorItems
