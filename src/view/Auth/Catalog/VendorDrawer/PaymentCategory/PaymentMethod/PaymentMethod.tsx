import { Flex, Text, Badge } from '@mantine/core'

type PaymentMethodProps = {
  name: string
  icon: React.ReactNode
}

function PaymentMethod({ name, icon }: PaymentMethodProps) {
  return (
    <Badge
      variant="light"
      c="dark"
      p={15}
    >
      <Flex gap={5}>
        {icon} <Text>{name}</Text>
      </Flex>
    </Badge>
  )
}

export default PaymentMethod
