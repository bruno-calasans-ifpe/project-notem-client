/* eslint-disable no-else-return */
import Section from '../../../components/Section/Section'
import useAuthStore from '../../../store/useAuthStore'
import SearchBar from './SearchBar/SearchBar'

function AuthHome() {
  const { user } = useAuthStore()

  return (
    <Section
      title="Praias"
      subtitle="Encontra a sua praia favorita"
      titleColor="black"
    >
      <SearchBar />
    </Section>
  )
}

export default AuthHome
