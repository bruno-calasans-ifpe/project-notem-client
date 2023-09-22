/* eslint-disable react/require-default-props */
import { Modal } from '@mantine/core'
import LoginForm from './LoginForm'

type LoginModalProps = {
  isOpen?: boolean
  close: () => void
}

function LoginModal({ isOpen, close }: LoginModalProps) {
  return (
    <Modal
      opened={!!isOpen}
      onClose={close}
      title="Entre com a sua conta"
      centered
    >
      <LoginForm />
    </Modal>
  )
}

export default LoginModal
