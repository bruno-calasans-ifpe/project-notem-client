/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import { Flex, Text } from '@mantine/core'
import { IconBrandMastercard, IconBrandVisa } from '@tabler/icons-react'
import PaymentMethod from './PaymentMethod'

type PaymentCategoryProps = {
  category: string
  methods: string[]
}

function PaymentCategory({ category, methods }: PaymentCategoryProps) {
  return (
    <Flex
      direction="column"
      gap={10}
    >
      <Text size="lg">{category}</Text>

      <Flex gap={5}>
        {methods.map((method) => {
          if (method.toLowerCase().includes('mastercard')) {
            return (
              <PaymentMethod
                key={method}
                name={method}
                icon={<IconBrandMastercard />}
              />
            )
          }

          if (method.toLowerCase().includes('visa')) {
            return (
              <PaymentMethod
                key={method}
                name={method}
                icon={<IconBrandVisa />}
              />
            )
          }

          if (method.toLowerCase().includes('visa')) {
            return (
              <PaymentMethod
                key={method}
                name={method}
                icon={<IconBrandVisa />}
              />
            )
          }
        })}
      </Flex>
    </Flex>
  )
}

export default PaymentCategory
