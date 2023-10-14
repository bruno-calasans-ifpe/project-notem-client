import {
  Card,
  Text,
  Box,
  TextInput,
  PasswordInput,
  Flex,
  Select,
  Checkbox,
  Anchor,
  Button,
  LoadingOverlay,
  Divider,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useState } from 'react'

type RegisterInputsForm = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
  accountType: string
  termsOfService: boolean
}

export default function Register() {
  const [loading, setLoading] = useState(false)

  const form = useForm<RegisterInputsForm>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      accountType: 'Cliente',
      termsOfService: false,
    },

    validate: {
      name: (value) => (value.length < 2 ? 'Nome deve ter no mínimo 3 caracteres' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email inválido'),
      password: (value) => (value.length < 8 ? 'Nome deve ter no mínimo 8 caracteres' : null),
      passwordConfirmation: (value, values) => (value !== values.password ? 'Senhas não são iguais' : null),
      termsOfService: (value) => (!value ? 'Você deve concordar com os Termos e Serviços' : null),
    },
  })

  const registerHandler = async () => {
    // checking form
    const { hasErrors } = form.validate()
    if (hasErrors) {
      return
    }

    // start
    setLoading(true)

    // todo register api
    console.log(form.values)

    // end
    setLoading(false)
  }

  return (
    <Box
      pos="relative"
      style={{
        minWidth: '400px',
        maxWidth: '550px',
        margin: 'auto',
        alignSelf: 'flex-start',
      }}
    >
      <LoadingOverlay
        visible={loading}
        zIndex={1000}
        overlayProps={{ radius: 'sm', blur: 1 }}
        loaderProps={{ color: 'blue', type: 'bars' }}
      />
      <Card
        id="register-form"
        withBorder
        shadow="sm"
        padding="lg"
        radius="md"
      >
        <Flex>
          <Text
            size="xl"
            fw="bold"
          >
            Criar conta
          </Text>
        </Flex>

        <Divider />

        <form onSubmit={(e) => e.preventDefault()}>
          <Flex
            mt="md"
            direction="column"
            gap={10}
          >
            <TextInput
              label="Nome"
              placeholder="Seu nome"
              size="md"
              radius="md"
              withAsterisk
              {...form.getInputProps('name')}
            />

            <TextInput
              label="Email"
              placeholder="your@email.com"
              size="md"
              radius="md"
              withAsterisk
              {...form.getInputProps('email')}
            />

            <PasswordInput
              label="Senha"
              placeholder="Sua senha"
              size="md"
              radius="md"
              withAsterisk
              {...form.getInputProps('password')}
            />

            <PasswordInput
              label="Confirmação de senha"
              placeholder="Confirme sua senha"
              size="md"
              radius="md"
              withAsterisk
              {...form.getInputProps('passwordConfirmation')}
            />

            <Select
              label="Eu sou"
              placeholder="Pick value"
              data={['Cliente', 'Vendedor']}
              defaultValue="Cliente"
              size="md"
              radius="md"
              {...form.getInputProps('accountType')}
            />

            <Checkbox
              mt="md"
              label={
                <Text>
                  Concordo com os <Anchor href="/terms-and-services">termos e serviços</Anchor>
                </Text>
              }
              {...form.getInputProps('termsOfService')}
              size="sm"
            />

            <Flex
              justify="space-between"
              mt="md"
            >
              <Button
                type="submit"
                onClick={registerHandler}
              >
                Criar conta
              </Button>
              <Anchor href="/login">Já tenho uma conta</Anchor>
            </Flex>
          </Flex>
        </form>
      </Card>
    </Box>
  )
}
