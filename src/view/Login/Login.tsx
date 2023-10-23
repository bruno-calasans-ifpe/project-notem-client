/* eslint-disable react/require-default-props */
import { Modal } from '@mantine/core'
import LoginForm from './LoginForm'

type LoginModalProps = {
  isOpen?: boolean
  onClose: () => void
  onLogin?: () => void
}

function LoginModal({ isOpen, onClose, onLogin }: LoginModalProps) {
  return (
    <Modal
      opened={!!isOpen}
      onClose={onClose}
      title="Entre com a sua conta"
      centered
    >
      <LoginForm onLogin={onLogin} />
    </Modal>
  )
}

export default LoginModal
