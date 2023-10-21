/* eslint-disable import/no-self-import */
/* eslint-disable react/require-default-props */
/* eslint-disable no-param-reassign */
import { Flex } from '@mantine/core'

type ActionIconOverlayProps = {
  children: React.ReactNode
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  offset?: number
  zIndex?: number
}

function ActionIconOverlay({ children, position, offset = 5, zIndex = 100 }: ActionIconOverlayProps) {
  const positionStyle: React.CSSProperties = {}

  switch (position) {
    case 'bottom-right':
      positionStyle.bottom = offset
      positionStyle.right = offset
      break
    case 'bottom-left':
      positionStyle.bottom = offset
      positionStyle.left = offset
      break
    case 'top-left':
      positionStyle.top = offset
      positionStyle.left = offset
      break
    default:
      positionStyle.top = offset
      positionStyle.right = offset
  }

  return (
    <Flex
      style={{
        position: 'absolute',
        zIndex,
        ...positionStyle,
      }}
    >
      {children}
    </Flex>
  )
}

export default ActionIconOverlay
