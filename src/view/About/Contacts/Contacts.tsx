import { useForm } from '@mantine/form'
import { Card, Group, Button, TextInput, Textarea, Flex } from '@mantine/core'
import { IconSend } from '@tabler/icons-react'
import Section from '../../../components/Section/Section'

type ContactsInputsForm = {
  name: string
  email: string
  subject: string
  message: string
}

function Contacts() {
  const form = useForm<ContactsInputsForm>({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },

    validate: {
      name: (value) => (value.length < 3 ? 'Nome deve ter 3 ou mais caracteres' : null),
      subject: (value) => (value.length < 3 ? 'Assunto deve ter 3 ou mais caracteres' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email inválido'),
      message: (value) => (value.length < 20 ? 'Mensagem precisa ter 20 ou mais caracteres' : null),
    },
  })

  const contactHandler = () => {
    form.validate()
  }

  const clearFormHandler = () => {
    form.reset()
  }

  return (
    <Section
      title="Contate-nos"
      titleColor="black"
    >
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <Flex
            direction="column"
            gap={15}
          >
            <TextInput
              id="name"
              label="Nome"
              placeholder="Seu nome"
              withAsterisk
              {...form.getInputProps('name')}
            />
            <TextInput
              id="email"
              label="Email"
              placeholder="Seu email"
              withAsterisk
              {...form.getInputProps('email')}
            />
            <TextInput
              id="subject"
              label="Assunto"
              placeholder="Assunto do Contato"
              withAsterisk
              {...form.getInputProps('subject')}
            />
            <Textarea
              id="message"
              label="Mensagem"
              placeholder="Sua mensagem"
              size="xl"
              autosize
              minRows={5}
              maxRows={10}
              withAsterisk
              {...form.getInputProps('message')}
            />
            <Group
              justify="space-between"
              mt="md"
            >
              <Button
                type="submit"
                // rightSection={<IconSend size={20} />}
                onClick={contactHandler}
                w={200}
              >
                Enviar
              </Button>
              <Button
                type="reset"
                variant="subtle"
                onClick={clearFormHandler}
              >
                Limpar
              </Button>
            </Group>
          </Flex>
        </form>
      </Card>
    </Section>
  )
}

export default Contacts
