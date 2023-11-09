/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/require-default-props */
/* eslint-disable import/order */
import {
  Text,
  Group,
  Button,
  ActionIcon,
  Flex,
  Rating,
  Textarea,
  Menu,
} from '@mantine/core'
import type { BeachRating } from '../../../../../types/Beach'
import { useSetState } from '@mantine/hooks'
import { IconEditCircle, IconTrash, IconDotsVertical } from '@tabler/icons-react'

type UserRatingProps = {
  initalRating?: BeachRating
}

type RatingData = {
  editing: boolean
  commentary: string
  stars: number
}

function UserRating({ initalRating }: UserRatingProps) {
  const [rating, setRating] = useSetState<RatingData>({
    editing: false,
    commentary: initalRating ? initalRating.commentary : '',
    stars: initalRating ? initalRating.stars : 0,
  })

  //   editing actions
  const startEditing = () => {
    setRating({ editing: true })
  }

  const cancelEditing = () => {
    setRating({
      editing: false,
      commentary: initalRating ? initalRating.commentary : '',
      stars: initalRating ? initalRating.stars : 0,
    })
  }

  //   stars actions
  const changeStars = (value: number) => {
    setRating({ stars: value })
  }

  // commentary actions
  const changeCommentary = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRating({ commentary: e.target.value })
  }

  const saveCommentary = () => {
    setRating({ editing: false })
    // todo api to save edit commentary
  }

  const removeCommentary = () => {
    setRating({
      editing: false,
      commentary: '',
      stars: 0,
    })
  }

  return (
    <Flex
      direction="column"
      justify="space-between"
      gap={5}
    >
      {rating.commentary && !rating.editing && (
        <>
          <Group justify="space-between">
            <Flex
              id="your-stars"
              align="center"
              gap={5}
            >
              <Text>({rating.stars})</Text>
              <Rating
                value={rating.stars}
                readOnly
              />
            </Flex>
            <Flex
              id="your-commentary-actions"
              align="flex-end"
              gap={5}
            >
              <Menu
                id="commentary-options"
                position="left-start"
                offset={2}
              >
                <Menu.Target>
                  <ActionIcon
                    variant="subtle"
                    c="indigo"
                  >
                    <IconDotsVertical
                      style={{ width: 15, height: 15 }}
                      stroke={2}
                    />
                  </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    id="edit-option"
                    onClick={startEditing}
                    leftSection={
                      <IconEditCircle
                        style={{ width: 15, height: 15 }}
                        stroke={1.5}
                      />
                    }
                  >
                    Editar
                  </Menu.Item>
                  <Menu.Item
                    id="remove-option"
                    onClick={removeCommentary}
                    leftSection={
                      <IconTrash
                        style={{ width: 15, height: 15 }}
                        stroke={1.5}
                      />
                    }
                  >
                    Excluir
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Flex>
          </Group>
        </>
      )}

      {rating.editing && (
        <Flex
          id="edit-commentary-area"
          direction="column"
          gap={8}
        >
          <Flex
            align="center"
            gap={5}
          >
            <Text>({rating.stars})</Text>
            <Rating
              value={rating.stars}
              onChange={changeStars}
            />
          </Flex>
          <Textarea
            size="md"
            rows={3}
            value={rating.commentary}
            onChange={changeCommentary}
          />
          <Group justify="flex-end">
            <Button
              variant="filled"
              color="blue"
              size="compact-xs"
              onClick={cancelEditing}
            >
              Cancelar
            </Button>
            <Button
              variant="filled"
              color="blue"
              size="compact-xs"
              onClick={saveCommentary}
            >
              Salvar
            </Button>
          </Group>
        </Flex>
      )}

      <Flex justify="space-between">
        {!rating.commentary && !rating.editing && (
          <>
            <Text c="dimmed">Você ainda não avaliou</Text>
            <Button
              variant="subtle"
              color="blue"
              size="compact-xs"
              onClick={startEditing}
            >
              Avaliar
            </Button>
          </>
        )}
        {rating.commentary && !rating.editing && (
          <Text
            c="dimmed"
            size="md"
          >
            {rating.commentary}
          </Text>
        )}
      </Flex>
    </Flex>
  )
}

export default UserRating
