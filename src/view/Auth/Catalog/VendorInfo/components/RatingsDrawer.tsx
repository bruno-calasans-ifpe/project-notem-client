/* eslint-disable react/require-default-props */
import { Drawer } from '@mantine/core'
import CommentaryArea from '../../../../../components/Ratings/components/CommentaryArea'
import type { UserRating } from '../../../../../types/UserRating'

type RatingsDrawerProps = {
  drawerTitle: string
  title?: string
  subtitle?: string
  ratings: UserRating[]
  opened: boolean
  onClose: () => void
}

function RatingsDrawer({
  drawerTitle,
  title,
  subtitle,
  ratings,
  opened,
  onClose,
}: RatingsDrawerProps) {
  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      position="right"
      title={drawerTitle}
    >
      <CommentaryArea
        title={title}
        subtitle={subtitle}
        ratings={ratings}
        scrollHeight="100%"
      />
    </Drawer>
  )
}

export default RatingsDrawer
