/* eslint-disable no-restricted-syntax */
import { Drawer, Tabs, Text, Flex } from '@mantine/core'
import {
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandGmail,
} from '@tabler/icons-react'
import type { Vendor } from '../../../../../../types/Vendor'
import ContactCard from './components/ContactCard'
import PaymentCategory from './components/PaymentCategory'

type VendorDrawerProps = {
  vendor: Vendor
  opened: boolean
  onClose: () => void
}

type PaymentMethodsCategory = {
  category: string
  methods: string[]
}

function VendorDrawer({ opened, vendor, onClose }: VendorDrawerProps) {
  const { whatsapp, instagram, twitter, email } = vendor.info.contacts
  const paymentMethods = vendor.info.paymentMethods

  const getMethodsFromCategory = (category: string) => {
    const methods: string[] = []

    for (const method of paymentMethods) {
      if (method.category === category) {
        methods.push(method.name)
      }
    }

    return methods
  }

  const organizePaymentMethodsPerCategory = () => {
    const categories: string[] = []
    const itemsPerCategory: PaymentMethodsCategory[] = []

    for (const method of paymentMethods) {
      if (!categories.includes(method.category)) {
        categories.push(method.category)
      }
    }

    for (const category of categories) {
      itemsPerCategory.push({
        category,
        methods: getMethodsFromCategory(category),
      })
    }

    return itemsPerCategory
  }

  const methodsPerCategory = organizePaymentMethodsPerCategory()

  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      title="Informações do Vendedor"
      overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      position="right"
    >
      <Tabs defaultValue="about">
        <Tabs.List grow>
          <Tabs.Tab value="about">Sobre</Tabs.Tab>
          <Tabs.Tab value="contacts">Contatos</Tabs.Tab>
          <Tabs.Tab value="payment-methods">Formas de Pagamento</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel
          value="about"
          p={10}
        >
          <Text size="lg">{vendor.info.about}</Text>
        </Tabs.Panel>

        <Tabs.Panel
          value="contacts"
          p={10}
        >
          <Flex
            direction="column"
            gap={10}
          >
            {whatsapp && (
              <ContactCard
                value={whatsapp}
                icon={<IconBrandWhatsapp />}
              />
            )}
            {instagram && (
              <ContactCard
                value={instagram}
                icon={<IconBrandInstagram />}
              />
            )}
            {twitter && (
              <ContactCard
                value={twitter}
                icon={<IconBrandTwitter />}
              />
            )}
            {email && (
              <ContactCard
                value={email}
                icon={<IconBrandGmail />}
              />
            )}
          </Flex>
        </Tabs.Panel>

        <Tabs.Panel
          value="payment-methods"
          p={10}
        >
          <Flex
            direction="column"
            gap={20}
          >
            {methodsPerCategory.map(({ category, methods }) => (
              <PaymentCategory
                category={category}
                methods={methods}
                key={category}
              />
            ))}
          </Flex>
        </Tabs.Panel>
      </Tabs>
    </Drawer>
  )
}

export default VendorDrawer
