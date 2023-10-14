import { TextInput, Button, Group, Box, Flex, PasswordInput, Anchor, LoadingOverlay, Divider } from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconAt, IconLock, IconLogin, IconBrandGoogle } from '@tabler/icons-react'
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

  const loginHandler = async () => {
    // checking form
    const { hasErrors } = form.validate()

    if (hasErrors) {
      return
    }

    // start loading
    start()

    // todo login api
    console.log(form.values)

    // stop loading
    stop()
  }

  const googleLoginHandler = async () => {
    // start loading
    start()

    // todo login api
    console.log(form.values)

    // stop loading
    stop()
  }

  return (
    <Box
      maw="100%"
      mx="md"
    >
      <LoadingOverlay
        visible={loading}
        zIndex={1000}
        overlayProps={{ radius: 'sm', blur: 2 }}
      />
      <form onSubmit={(e) => e.preventDefault()}>
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
          <Anchor href="/register">Não tenho conta</Anchor>
        </Group>

        <Flex
          direction="column"
          gap={10}
          mt="md"
        >
          <Button
            fullWidth
            // leftSection={<IconLogin size={16} />}
            type="submit"
            onClick={loginHandler}
          >
            Entrar
          </Button>

          <Divider label="Ou" />

          <Button
            leftSection={<IconBrandGoogle size={16} />}
            type="submit"
            color="#DC4234"
            onClick={googleLoginHandler}
          >
            Entrar com Google
          </Button>
        </Flex>
      </form>
    </Box>
  )
}

export default LoginForm
