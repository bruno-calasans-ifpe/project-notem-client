import { Anchor, Group, List, Text, Image, Divider } from '@mantine/core'
import { IconLink, IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from '@tabler/icons-react'
import { Container, LinksArea, FollowArea, Lists, UpperFooter, BottomFooter } from './footer.style'

function Footer() {
  return (
    <Container>
      <UpperFooter>
        <LinksArea>
          <Text
            fw="bold"
            size="lg"
          >
            Links
          </Text>
          <Lists>
            <List
              id="left-links"
              icon={<IconLink size={15} />}
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
              <List.Item>
                <Anchor
                  href="/about/contacts"
                  c="dark"
                >
                  Contate-nos
                </Anchor>
              </List.Item>
            </List>
            <List
              id="right-links"
              icon={<IconLink size={15} />}
            >
              <List.Item>
                <Anchor
                  href="/about/rules-recommendations"
                  c="dark"
                >
                  Regras e Recomendações
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor
                  href="/about/terms-of-use"
                  c="dark"
                >
                  Termos de Uso
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor
                  href="/about/privacy-policy"
                  c="dark"
                >
                  Política de Privacidade
                </Anchor>
              </List.Item>
            </List>
          </Lists>
        </LinksArea>
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
