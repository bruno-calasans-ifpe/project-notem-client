/* eslint-disable react/require-default-props */
import { Button, ButtonProps } from '@mantine/core'
import { IconArrowBackUp } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'

type GoBackButtonProps = {
  to: string
  children: React.ReactNode
  btnProps?: ButtonProps
}

function GoBackButton({ to, children, btnProps }: GoBackButtonProps) {
  return (
    <Link to={to}>
      <Button
        variant="subtle"
        leftSection={<IconArrowBackUp />}
        {...btnProps}
      >
        {children}
      </Button>
    </Link>
  )
}

export default GoBackButton
