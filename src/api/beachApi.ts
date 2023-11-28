import beaches from '../data/beaches'

export default function beachApi() {
  return {
    getAll() {
      return beaches
    },
    getById(beachId: string) {
      return beaches.find(({ id }) => id === beachId)
    },
    getByName(beachName: string) {
      return beaches.find(({ name }) => name === beachName)
    },
  }
}
