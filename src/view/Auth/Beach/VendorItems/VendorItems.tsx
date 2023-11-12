/* eslint-disable react/no-unused-prop-types */
import { Flex, Group, Text, Image, Rating, Grid, SimpleGrid } from '@mantine/core'
import { Link } from 'react-router-dom'
import CustomCarousel from '../../../../components/CustomCarousel/CustomCarousel'

type VendorItemsProps = {
  name: string
  rating: number
  img: string
  items: React.ReactNode[]
}

function VendorItems({ name, img, rating, items }: VendorItemsProps) {
  return (
    <Flex
      direction="column"
      gap={20}
    >
      <Group>
        <Image
          src={img}
          radius="xl"
          w={50}
          h={50}
        />
        <Flex direction="column">
          <Link to={`/vendor/${name}`}>
            <Text fw="bold">{name}</Text>
          </Link>
          <Group
            justify="flex-start"
            gap={5}
          >
            <Text>{rating}.0</Text>
            <Rating
              value={rating}
              readOnly
            />
          </Group>
        </Flex>
      </Group>
      <CustomCarousel
        items={items}
        height="100%"
        slideSize="25%"
        slideGap="md"
        loop
        align="start"
        slidesToScroll={4}
        controlsOffset="xs"
      />
    </Flex>
  )
}

export default VendorItems
