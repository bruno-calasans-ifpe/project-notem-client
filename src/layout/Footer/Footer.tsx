import { Anchor, Group, List, Text, Image, Flex } from '@mantine/core'
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from '@tabler/icons-react'
import { Container, LinksArea, FollowArea, Lists, UpperFooter, BottomFooter } from './footer.style'

function Footer() {
  return (
    <Container>
      <UpperFooter>
        <LinksArea>
          <Lists>
            {/* Right Links */}
            <Flex
              direction="column"
              justify="center"
              align="center"
            >
              <Text
                fw="bold"
                size="lg"
                ta="center"
              >
                Sobre a gente
              </Text>
              <List
                id="left-links"
                listStyleType="none"
                ta="center"
              >
                <List.Item>
                  <Anchor
                    href="/about/us"
                    c="dark"
                  >
                    Quem somos
                  </Anchor>
                </List.Item>
                <List.Item>
                  <Anchor
                    href="/about/team"
                    c="dark"
                  >
                    Nossa equipe
                  </Anchor>
                </List.Item>
              </List>
            </Flex>

            {/* Middle Links */}
            <Flex
              direction="column"
              justify="center"
              align="center"
            >
              <Text
                fw="bold"
                size="lg"
                ta="center"
              >
                Outras Informações
              </Text>
              <List
                id="right-links"
                listStyleType="none"
                ta="center"
              >
                <List.Item>
                  <Anchor
                    href="/about/QA"
                    c="dark"
                  >
                    Perguntas Frequentes
                  </Anchor>
                </List.Item>

                <List.Item>
                  <Anchor
                    href="/about/contacts"
                    c="dark"
                  >
                    Contate-nos
                  </Anchor>
                </List.Item>
              </List>
            </Flex>

            {/* Left Links */}
            <Flex
              direction="column"
              justify="center"
              align="center"
            >
              <Text
                fw="bold"
                size="lg"
                ta="center"
              >
                Legal
              </Text>
              <List
                id="right-links"
                listStyleType="none"
                ta="center"
              >
                <List.Item>
                  <Anchor
                    href="/about/terms"
                    c="dark"
                  >
                    Termos de Uso
                  </Anchor>
                </List.Item>
                <List.Item>
                  <Anchor
                    href="/about/privacy"
                    c="dark"
                  >
                    Política de Privacidade
                  </Anchor>
                </List.Item>
              </List>
            </Flex>
          </Lists>
        </LinksArea>

        {/* Siga-nos */}
        <FollowArea>
          <Text
            fw="bold"
            size="lg"
          >
            Siga-nos
          </Text>
          <Group>
            <Anchor
              href="https://www.facebook.com"
              c="black"
            >
              <IconBrandFacebook />
            </Anchor>
            <Anchor
              href="https://instagram.com"
              c="black"
            >
              <IconBrandInstagram />
            </Anchor>
            <Anchor
              href="https://www.twitter.com"
              c="black"
            >
              <IconBrandTwitter />
            </Anchor>
          </Group>
        </FollowArea>
      </UpperFooter>

      <BottomFooter>
        <Image
          src="/imgs/notem-logotype.png"
          h={50}
        />
        <Text
          fs="italic"
          fw="bold"
        >
          Copyright © NOTem. All rights reserved.
        </Text>
        <Text fw="bold">2023</Text>
      </BottomFooter>
    </Container>
  )
}

export default Footer
