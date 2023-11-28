/* eslint-disable react/require-default-props */
import { Flex, Title, Divider, FlexProps } from '@mantine/core'

type ModalSectionProps = FlexProps & {
  title: string
  children: React.ReactNode
}

function ModalSection({ title, children, ...flexProps }: ModalSectionProps) {
  return (
    <Flex
      id="modal-section"
      direction="column"
      gap={5}
      {...flexProps}
    >
      <Flex
        id="modal-section-title"
        direction="column"
      >
        <Title order={4}>{title}</Title>
        <Divider />
      </Flex>
      {children}
    </Flex>
  )
}

export default ModalSection
