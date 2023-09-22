/* eslint-disable react/require-default-props */
import { Title } from '@mantine/core'
import { Container, SectionContent } from './section.style'

type SectionProps = {
  title: string
  children: React.ReactNode
  bgColor?: string
}

function Section({ title, bgColor, children }: SectionProps) {
  return (
    <Container style={{ backgroundColor: bgColor ?? 'white' }}>
      <Title
        order={1}
        c="dark"
        ff="var(--font1)"
      >
        {title}
      </Title>
      <SectionContent>{children}</SectionContent>
    </Container>
  )
}

export default Section
