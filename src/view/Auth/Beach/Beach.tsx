/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Flex, Text } from '@mantine/core'
import Section from '../../../components/Section/Section'
import { Beach } from '../../../types/Beach'
import Location from './Location/Location'
import Search from '../../../components/Search/Search'
import Sorter from '../../../components/Sorter/Sorter'
import beachApi from '../../../api/beachApi'
import vendorApi from '../../../api/vendorApi'
import ItemsVendorsTab from './ItemsVendorsTab/ItemsVendorsTab'
import GoBackButton from '../../../components/GoBackButton/GoBackButton'

function SelectedBeach() {
  const { beachId } = useParams()
  const [loading, setLoading] = useState(false)
  const [beach, setBeach] = useState<Beach | null>(null)
  const [search, setSearch] = useState('')
  const vendors = vendorApi().getAll()
  const [tab, setTab] = useState('items')

  const loadBeach = () => {
    if (!beachId) return
    setLoading(true)
    const loadedBeach = beachApi().getById(beachId)
    if (loadedBeach) setBeach(loadedBeach)
    setLoading(false)
  }

  useEffect(() => {
    if (beachId) {
      loadBeach()
    }
  }, [beachId])

  return (
    <Section
      title={beach?.name ?? 'Praia Selecionada'}
      titleColor="black"
      subtitle={beach?.location}
    >
      <Flex
        direction="column"
        justify="space-between"
        gap={10}
      >
        <Flex
          direction="column"
          align="flex-end"
          gap={5}
        >
          <GoBackButton to="/">Selecionar outra praia</GoBackButton>

          <Flex
            direction="column"
            gap={20}
            style={{
              alignSelf: 'stretch',
            }}
          >
            <Flex gap={5}>
              <Flex
                direction="row"
                justify="space-between"
                gap={5}
              >
                <Location />
                <Sorter data={['preço', 'avaliação']} />
              </Flex>
              <Search
                value={search}
                placeholder={
                  tab === 'items'
                    ? 'Pesquise por um produto ou serviço'
                    : 'Pesquise por um vendedor'
                }
                onChange={setSearch}
                onReset={() => setSearch('')}
              />
            </Flex>
            {search && (
              <Flex gap={5}>
                <Text
                  size="lg"
                  fw="bold"
                >
                  Resultados para
                </Text>
                <Text
                  size="lg"
                  fw="bold"
                  c="red"
                >
                  {search}
                </Text>
              </Flex>
            )}
          </Flex>
        </Flex>

        <ItemsVendorsTab
          vendors={vendors}
          value={tab}
          onChange={setTab}
        />
      </Flex>
    </Section>
  )
}

export default SelectedBeach
