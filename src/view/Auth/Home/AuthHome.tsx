/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-else-return */
import { Pagination, Grid, Flex, Text } from '@mantine/core'
import { useSetState } from '@mantine/hooks'
import Section from '../../../components/Section/Section'
import useAuthStore from '../../../store/useAuthStore'
import SearchBar from './SearchBar/SearchBar'
import BeachCard from './BeachCard/BeachCard'
import beachApi from '../../../api/beachApi'

type BeachesPagination = {
  itemsPerPage: number
  currentPage: number
}

function AuthHome() {
  const { user } = useAuthStore()
  const [pagination, setPagination] = useSetState<BeachesPagination>({
    currentPage: 1,
    itemsPerPage: 6,
  })

  const beaches = beachApi().getAll()
  const { currentPage, itemsPerPage } = pagination
  const minIndex = itemsPerPage * (currentPage - 1)
  const maxIndex = itemsPerPage * currentPage - 1
  const totalPages = Math.ceil(beaches.length / pagination.itemsPerPage)

  const beachesOnPage = beaches.filter((beach, index) => {
    return index >= minIndex && index <= maxIndex
  })

  const changePage = (page: number) => {
    setPagination({ currentPage: page })
  }

  return (
    <Section
      title="Praias Disponíveis"
      subtitle="Selecione uma praia"
      titleColor="black"
    >
      <SearchBar />

      <Grid
        columns={3}
        mt="lg"
        align="center"
        gutter={{
          base: 15,
        }}
      >
        <Grid.Col span={3}>
          <Flex justify="space-between">
            <Text c="dimmed">
              Página {pagination.currentPage} de {totalPages}
            </Text>
            <Text c="dimmed">
              Mostrando {beachesOnPage.length} de {beaches.length} item(s)
            </Text>
          </Flex>
        </Grid.Col>
        {beachesOnPage.map((beach, index) => (
          <Grid.Col
            span={1}
            key={`${beach.name}${index}`}
          >
            <BeachCard beach={beach} />
          </Grid.Col>
        ))}
        <Grid.Col span={3}>
          <Flex
            justify="center"
            p={20}
          >
            <Pagination
              total={totalPages}
              radius="xl"
              withEdges
              onChange={changePage}
            />
          </Flex>
        </Grid.Col>
      </Grid>
    </Section>
  )
}

export default AuthHome
