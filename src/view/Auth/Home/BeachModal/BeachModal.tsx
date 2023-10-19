/* eslint-disable no-restricted-syntax */
/* eslint-disable no-return-assign */
/* eslint-disable import/no-cycle */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-useless-fragment */
import { Text, Image, Group, Button, ActionIcon, Modal, Flex, Title, Divider, Rating, Anchor } from '@mantine/core'
import { IconEditCircle, IconTrash } from '@tabler/icons-react'
import { Carousel, useAnimationOffsetEffect, Embla } from '@mantine/carousel'
import { useEffect, useState } from 'react'
import { useSetState } from '@mantine/hooks'
import type { BeachCardProps } from '../BeachCard/BeachCard'

type BeachModalProps = BeachCardProps & {
  opened: boolean
  close: () => void
}

type RatingsInfo = {
  sumStars: number
  numRatings: number
  media: number
}

function BeachModal({ opened, close, beach, yourRating }: BeachModalProps) {
  const [embla, setEmbla] = useState<Embla | null>(null)
  useAnimationOffsetEffect(embla, 200)
  const [ratingInfo, setRatingInfo] = useSetState<RatingsInfo>({
    media: 0,
    sumStars: 0,
    numRatings: 0,
  })

  useEffect(() => {
    const numRatings = yourRating ? beach.ratings.length + 1 : beach.ratings.length
    let sumStars = yourRating ? yourRating.stars : 0
    let media = 0

    if (numRatings > 0) {
      for (const rating of beach.ratings) {
        sumStars += rating.stars
      }
      media = sumStars / numRatings
    }

    setRatingInfo({ media, sumStars, numRatings })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [yourRating?.stars])

  return (
    <>
      <Modal
        id="more-info"
        h="auto"
        opened={opened}
        onClose={close}
        centered
        withCloseButton={false}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <Carousel
          loop
          height={300}
          align="center"
          withIndicators
          getEmblaApi={setEmbla}
          slideGap="xs"
        >
          {beach.images.map((image, key) => (
            <Carousel.Slide key={key}>
              <Image
                src={image}
                height="100%"
                alt="Norway"
              />
            </Carousel.Slide>
          ))}
        </Carousel>
        <Flex
          direction="column"
          align="center"
        >
          <Title
            mt="lg"
            order={2}
          >
            {beach.name}
          </Title>
          <Flex
            gap={5}
            align="center"
            justify="center"
            direction="column"
          >
            <Group>
              <Flex
                align="center"
                gap={5}
              >
                <Text>({ratingInfo.media})</Text>
                <Rating
                  value={ratingInfo.media}
                  fractions={2}
                  readOnly
                />
              </Flex>
              <Text
                size="xs"
                c="dimmed"
              >
                <Anchor>{ratingInfo.numRatings} avaliações no total</Anchor>
              </Text>
            </Group>
          </Flex>
          <Flex
            style={{ alignSelf: 'normal' }}
            direction="column"
            p="md"
            gap={15}
          >
            <Flex
              id="modal-section"
              direction="column"
              gap={2}
            >
              <Flex
                id="modal-section-title"
                direction="column"
              >
                <Title order={4}>Localização</Title>
                <Divider />
              </Flex>
              <Text c="dimmed">{beach.location}</Text>
            </Flex>

            <Flex
              id="modal-section"
              direction="column"
              gap={2}
            >
              <Flex
                id="modal-section-title"
                direction="column"
              >
                <Title order={4}>Distância (metros)</Title>
                <Divider />
              </Flex>
              <Text c="dimmed">{beach.distance}</Text>
            </Flex>

            <Flex
              id="modal-section"
              direction="column"
              gap={2}
            >
              <Flex
                id="modal-section-title"
                direction="column"
              >
                <Title order={4}>Nível de Perigo</Title>
                <Divider />
              </Flex>
              <Text c="dimmed">{beach.danger}</Text>
            </Flex>

            <Flex
              id="your-avaliation"
              direction="column"
              gap={10}
            >
              <Flex
                id="your-avaliation-title"
                direction="column"
              >
                <Title order={4}>Sua avaliação</Title>
                <Divider />
              </Flex>
              <Flex
                direction="column"
                justify="space-between"
                gap={5}
              >
                {yourRating && (
                  <>
                    <Group justify="space-between">
                      <Flex
                        id="your-stars"
                        align="center"
                        gap={5}
                      >
                        <Text>{yourRating?.stars}</Text>
                        <Rating
                          value={yourRating?.stars}
                          fractions={2}
                          readOnly
                        />
                      </Flex>
                      <Flex
                        id="your-commentary-actions"
                        align="flex-end"
                        gap={5}
                      >
                        <ActionIcon
                          variant="subtle"
                          c="orange"
                        >
                          <IconEditCircle
                            style={{ width: 15, height: 15 }}
                            stroke={1.5}
                          />
                        </ActionIcon>
                        <ActionIcon
                          variant="subtle"
                          c="red"
                        >
                          <IconTrash
                            style={{ width: 15, height: 15 }}
                            stroke={1.5}
                          />
                        </ActionIcon>
                      </Flex>
                    </Group>
                  </>
                )}

                <Flex justify="space-between">
                  <Text c="dimmed">{yourRating ? yourRating.commentary : 'Você ainda não avaliou'}</Text>
                  {!yourRating && (
                    <Button
                      variant="subtle"
                      color="blue"
                      size="compact-xs"
                    >
                      Avaliar
                    </Button>
                  )}
                </Flex>
              </Flex>
            </Flex>

            <Button
              variant="light"
              color="blue"
              fullWidth
              mt="md"
              radius="md"
            >
              Selecionar
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </>
  )
}

export default BeachModal
