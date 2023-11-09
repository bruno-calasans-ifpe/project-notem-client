import { Group, Button, Image, Anchor, Text } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'
import { useLocation } from 'react-router'
import {
  Container,
  TopHeader,
  LogoArea,
  MenuArea,
  BottomHeader,
  WelcomeMsgArea,
  ObsArea,
} from './header.style'

function Header() {
  const currentLocation = useLocation()
  const isHomePage = currentLocation.pathname === '/'

  return (
    <Container className={isHomePage ? '' : 'no-welcome-msg'}>
      <TopHeader id="top-header">
        <LogoArea id="logo">
          <Anchor href="/">
            <Image
              src="/imgs/notem-logotype.png"
              alt="notem logo"
              w={150}
            />
          </Anchor>
        </LogoArea>
        <MenuArea id="nav-menu">
          <Group gap="xs">
            <Button
              variant="outline"
              color="indigo"
            >
              <Text fw="bold">Login</Text>
            </Button>
            <Button
              component="a"
              href="/register"
              variant="outline"
              color="indigo"
            >
              <Text fw="bold">Registrar</Text>
            </Button>
            <Button
              component="a"
              href="/about/us"
              variant="outline"
              color="indigo"
            >
              <Text fw="bold">Sobre</Text>
            </Button>
          </Group>
        </MenuArea>
      </TopHeader>

      <BottomHeader id="bottom-header">
        <WelcomeMsgArea id="welcome-msg">
          <Text
            id="msg"
            size="xl"
            fw="bold"
            c="dark"
          >
            Vai curtir um dia de praia? Que tal aproveitar tudo o que há de
            melhor em termos de produtos e serviços, na praia que você escolheu
            <Anchor href="#obs1">*</Anchor>, sem ter que ficar procurando por
            eles? No NOTem você encontra diversos vendedores dispostos a levar
            de tudo<Anchor href="#obs2">**</Anchor>, bem onde você está!
          </Text>

          <Button
            component="a"
            href="/register"
            color="teal"
            size="md"
            fullWidth={false}
            rightSection={<IconArrowRight />}
          >
            <Text
              size="lg"
              fw="bold"
            >
              Registrar-se
            </Text>
          </Button>
        </WelcomeMsgArea>
        <ObsArea>
          <Text
            id="obs1"
            size="sm"
            fs="italic"
            c="dark"
            fw="bold"
          >
            * dentro as praias disponíveis
          </Text>
          <Text
            id="obs2"
            size="sm"
            fs="italic"
            c="dark"
            fw="bold"
          >
            ** dentro do que o vendedor tem a oferecer
          </Text>
        </ObsArea>
      </BottomHeader>
    </Container>
  )
}

export default Header
