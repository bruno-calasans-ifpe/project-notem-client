import { Group, Button, Image, Anchor, Text } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'
import { Container, TopHeader, LogoArea, MenuArea, BottomHeader, WelcomeMsgArea, ObsArea } from './header.style'

function Header() {
  return (
    <Container>
      <TopHeader>
        <LogoArea id="logo">
          <Image
            src="./imgs/notem-logotype.jpg"
            alt="notem logo"
            w={150}
          />
        </LogoArea>
        <MenuArea id="menu">
          <Group gap="xs">
            <Button
              variant="outline"
              color="indigo"
            >
              <Text fw="bold">Login</Text>
            </Button>
            <Button
              variant="outline"
              color="indigo"
            >
              <Text fw="bold">Registrar</Text>
            </Button>
            <Button
              variant="outline"
              color="indigo"
            >
              <Text fw="bold">Sobre</Text>
            </Button>
          </Group>
        </MenuArea>
      </TopHeader>
      <BottomHeader>
        <WelcomeMsgArea>
          <Text
            id="msg"
            size="xl"
            fw="bold"
            c="dark"
          >
            Vai curtir um dia de praia? Que tal aproveitar tudo o que há de melhor em termos de produtos e serviços, na
            praia que você escolheu<Anchor href="#obs1">¹</Anchor>, sem ter que ficar procurando por eles? No NOTem você
            encontra diversos vendedores dispostos a levar de tudo<Anchor href="#obs2">²</Anchor>, bem onde você está!
          </Text>

          <Button
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
            ff="cursive"
          >
            1* dentro as praias disponíveis
          </Text>
          <Text
            id="obs2"
            size="sm"
            fs="italic"
            c="dark"
            fw="bold"
            ff="cursive"
          >
            2* dentro do que o vendedor tem a oferecer
          </Text>
        </ObsArea>
      </BottomHeader>
    </Container>
  )
}

export default Header
