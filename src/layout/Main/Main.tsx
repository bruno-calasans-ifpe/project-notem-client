import { Container } from './main.style'

type MainProps = { children: React.ReactNode }

function Main({ children }: MainProps) {
  return <Container>{children}</Container>
}

export default Main
