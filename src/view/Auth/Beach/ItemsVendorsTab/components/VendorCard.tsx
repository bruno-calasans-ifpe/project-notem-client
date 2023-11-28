import { Flex, Card, Image, Group, Text, Rating } from '@mantine/core'
import { Link } from 'react-router-dom'
import type { Vendor } from '../../../../../types/Vendor'

type VendorCardProps = {
  vendor: Vendor
}

function VendorCard({ vendor }: VendorCardProps) {
  return (
    <Link
      to={`/vendor/${vendor.id}`}
      className="op"
    >
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
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
            <Text fw="bold">{vendor.name}</Text>
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
      </Card>
    </Link>
  )
}

export default VendorCard
