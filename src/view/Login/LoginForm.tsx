/* eslint-disable react/require-default-props */
import { TextInput, Button, Group, Box, Flex, PasswordInput, Anchor, LoadingOverlay, Divider } from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconAt, IconLock, IconBrandGoogle } from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'
import useAuthStore from '../../store/useAuthStore'

type LoginFormInputs = {
  email: string
  password: string
}

type LoginFormProps = {
  onLogin?: () => void
}

function LoginForm({ onLogin }: LoginFormProps) {
  const [loading, setLoading] = useState(false)
  const { login } = useAuthStore()

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
    setLoading(true)

    // todo login api
    login({
      email: form.values.email,
      name: 'Test User',
      accountType: 'cliente',
    })

    if (onLogin) {
      onLogin()
    }
    // stop loading
    setLoading(false)
  }

  const googleLoginHandler = async () => {
    // start loading
    setLoading(true)

    // todo login api
    console.log(form.values)

    // stop loading
    setLoading(false)
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
