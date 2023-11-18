/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-return-assign */
/* eslint-disable import/no-cycle */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-useless-fragment */
import { Text, Button, Modal, Flex, Title, Image } from '@mantine/core'
import { Link } from 'react-router-dom'
import slugify from 'slugify'
import ModalSection from './ModalSection/ModalSection'
import Ratings from './Ratings/Ratings'
import UserRating from './UserRating/UserRating'
import CustomCarousel from '../../../../components/CustomCarousel/CustomCarousel'
import type { Beach } from '../../../../types/Beach'

type BeachModalProps = {
  beach: Beach
  opened: boolean
  close: () => void
}

function BeachModal({ opened, close, beach }: BeachModalProps) {
  return (
    <>
      <Modal
        id="beach-info-modal"
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
        <CustomCarousel
          items={beach.images.map((img) => (
            <Image
              src={img}
              key={img}
            />
          ))}
        />
        <Flex
          direction="column"
          align="center"
        >
          <Flex
            id="modal-header"
            direction="column"
          >
            <Title
              mt="lg"
              order={2}
            >
              {beach.name}
            </Title>

            <Ratings
              title="Avaliações da Praia"
              subtitle={beach.name}
              ratings={beach.ratings}
            />
          </Flex>

          <Flex
            id="modal-sections"
            style={{ alignSelf: 'normal' }}
            direction="column"
            p="md"
            gap={15}
          >
            <ModalSection title="Localização">
              <Text c="dimmed">{beach.location}</Text>
            </ModalSection>

            <ModalSection title="Distância (metros)">
              <Text c="dimmed">{beach.distance}</Text>
            </ModalSection>

            <ModalSection title="Nível de Perigo">
              <Text c="dimmed">{beach.danger}</Text>
            </ModalSection>

            <ModalSection title="Sua avaliação">
              <UserRating initalRating={beach.userRating} />
            </ModalSection>

            <Link to={`/beach/${slugify(beach.name, { lower: true })}`}>
              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
              >
                Selecionar
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Modal>
    </>
  )
}

export default BeachModal
