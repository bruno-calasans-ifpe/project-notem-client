import { TextInput, Button, Group, Box, Flex, PasswordInput, Anchor, LoadingOverlay } from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconAt, IconLock, IconLogin } from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks'

type LoginFormInputs = {
  email: string
  password: string
}

function LoginForm() {
  const [loading, { open: start, close: stop }] = useDisclosure(false)

  const form = useForm<LoginFormInputs>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email inválido'),
      password: (value) => (value.length < 8 ? 'Sua senha deve ter 8 ou mais caracteres' : null),
    },
  })

  const loginHandler = async (inputs: LoginFormInputs) => {
    // start loading
    start()

    // todo login api

    // stop loading
    stop()
  }

  return (
    <Box
      maw="100%"
      mx="md"
      //   pos="relative"
    >
      <LoadingOverlay
        visible={loading}
        zIndex={1000}
        overlayProps={{ radius: 'sm', blur: 2 }}
      />
      <form onSubmit={form.onSubmit(loginHandler)}>
        <Flex
          direction="column"
          gap={10}
        >
          <TextInput
            type="email"
            label="Email"
            placeholder="Seu email"
            required
            {...form.getInputProps('email')}
            leftSection={<IconAt size={16} />}
          />
          <PasswordInput
            type="password"
            label="Senha"
            placeholder="Sua senha"
            required
            leftSection={<IconLock size={16} />}
            {...form.getInputProps('password')}
          />
        </Flex>

        <Group
          justify="space-between"
          mt="md"
        >
          <Anchor href="/forgot-password">Esqueci minha senha</Anchor>
          <Button
            leftSection={<IconLogin size={16} />}
            type="submit"
          >
            Entrar
          </Button>
        </Group>
      </form>
    </Box>
  )
}

export default LoginForm
