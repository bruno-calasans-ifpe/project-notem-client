import { Flex, Breadcrumbs, Image, Text, Card, Button } from '@mantine/core'
import { Link } from 'react-router-dom'
import ItemBadges from '../../../../components/ItemBadges/ItemBadges'
import type { Item } from '../../../../types/Item'
import type { Vendor } from '../../../../types/Vendor'

type SelectedItemProps = {
  item: Item
  vendor: Vendor
}

function SelectedItem({ item, vendor }: SelectedItemProps) {
  return (
    <Flex
      direction="column"
      justify="center"
      gap={10}
    >
      <Breadcrumbs>
        <Link to={`/vendor/${vendor.id}`}>Catálogo</Link>
        <Link to={`/vendor/${vendor.id}?category=${item.category}`}>{item.category}</Link>
      </Breadcrumbs>
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
      >
        <Flex
          direction="column"
          gap={15}
          mt={10}
        >
          <Flex
            align="center"
            justify="center"
          >
            <Image
              src={item.img}
              alt={item.name}
              h={200}
            />
          </Flex>
          <Flex
            direction="column"
            justify="space-between"
            gap={5}
            mb={5}
          >
            <Flex>
              <Text
                size="lg"
                fw="bold"
                c="blue"
              >
                {item.name}
              </Text>
              <Text>{}</Text>
            </Flex>
            <ItemBadges
              item={item}
              direction="row"
              showTags
            />
          </Flex>

          <Flex direction="column">
            <Text fw="bold">Preço</Text>
            <Text
              c="green"
              fw="bold"
            >
              R$ {item.price}
            </Text>
          </Flex>

          <Flex direction="column">
            <Text fw="bold">Descrição</Text>
            <Text c="dimmed">{item.desc}</Text>
          </Flex>

          <Flex gap={5}>
            <Button
              fullWidth
              bg="green"
            >
              Solicitar
            </Button>
            <Link
              to={`/vendor/${vendor.id}`}
              style={{ width: '100%' }}
            >
              <Button
                variant="outline"
                fullWidth
              >
                Cancelar
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  )
}

export default SelectedItem
