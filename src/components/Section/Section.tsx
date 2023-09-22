/* eslint-disable react/require-default-props */
import { Title, Text } from '@mantine/core'
import { Container, ContentArea, HeaderArea } from './section.style'

type SectionProps = {
  title: string
  titleColor?: React.CSSProperties['color']
  subtitle?: string
  subtitleColor?: React.CSSProperties['color']
  children: React.ReactNode
  bgColor?: React.CSSProperties['color']
}

function Section({ children, ...props }: SectionProps) {
  return (
    <Container style={{ backgroundColor: props.bgColor ?? 'white' }}>
      <HeaderArea>
        <Title
          order={1}
          c={props.titleColor ?? 'snow'}
          ff="var(--font1)"
        >
          {props.title}
        </Title>
        {props.subtitle && (
          <Text
            c={props.subtitleColor ?? 'dark'}
            ff="var(--font2)"
            fw="bold"
          >
            {props.subtitle}
          </Text>
        )}
      </HeaderArea>
      <ContentArea>{children}</ContentArea>
    </Container>
  )
}

export default Section
