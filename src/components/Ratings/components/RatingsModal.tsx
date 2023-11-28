import { Modal } from '@mantine/core'
import CommentaryArea from './CommentaryArea'
import type { UserRating } from '../../../types/UserRating'

type RatingModalProps = {
  opened: boolean

  title: string
  subtitle: string
  ratings: UserRating[]
  close: () => void
}

function RatingModal({ opened, close, ratings, title, subtitle }: RatingModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={close}
      centered
      withCloseButton={false}
    >
      <CommentaryArea
        title={title}
        subtitle={subtitle}
        ratings={ratings}
      />
    </Modal>
  )
}

export default RatingModal
