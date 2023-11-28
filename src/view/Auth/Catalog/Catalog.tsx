/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable arrow-body-style */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Flex, Button } from '@mantine/core'
import { IconArrowBackUp } from '@tabler/icons-react'
import { Link, useSearchParams } from 'react-router-dom'
import Section from '../../../components/Section/Section'
import type { Vendor } from '../../../types/Vendor'
import Search from '../../../components/Search/Search'
import type { Item } from '../../../types/Item'
import VendorInfo from './VendorInfo/VendorInfo'
import ItemTabs from './ItemTabs/ItemTabs'
import vendorApi from '../../../api/vendorApi'
import SelectedItem from './SelectedItem/SelectedItem'
import GoBackButton from '../../../components/GoBackButton/GoBackButton'

function Catalog() {
  const { vendorId } = useParams()
  const [search] = useSearchParams()
  const [vendor, setVendor] = useState<Vendor | null>(null)
  const [item, setItem] = useState<Item | null>(null)

  const loadVendor = () => {
    if (!vendorId) return
    const foundVendor = vendorApi().getById(vendorId)
    if (!foundVendor) return
    setVendor(foundVendor)
  }

  const getItemFromVendor = () => {
    if (!vendorId) return

    const itemId = search.get('item')
    if (!itemId) return setItem(null)

    const foundItem = vendorApi().getItemFromVendor(vendorId, itemId)
    if (foundItem) setItem(foundItem)
  }

  useEffect(() => {
    loadVendor()
  }, [vendorId])

  useEffect(() => {
    getItemFromVendor()
  }, [search.get('item')])

  return (
    <Section
      title="Catálogo do Vendedor"
      titleColor="black"
    >
      <Flex
        direction="column"
        gap={20}
      >
        <Flex
          gap={20}
          direction="column"
        >
          <Flex
            justify="space-between"
            align="center"
          >
            {vendor && <VendorInfo vendor={vendor} />}
            <GoBackButton to={`/beach/${vendor?.beachId}`}>
              Voltar para praia
            </GoBackButton>
          </Flex>
          <Search placeholder="Pesquisar por um produto ou serviço" />
        </Flex>
        {item && vendor && (
          <SelectedItem
            item={item}
            vendor={vendor}
          />
        )}
        {!item && vendor && (
          <ItemTabs
            items={vendor.items}
            defaultTab="Tudo"
          />
        )}
      </Flex>
    </Section>
  )
}

export default Catalog
