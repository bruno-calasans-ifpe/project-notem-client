/* eslint-disable react/require-default-props */
import { Flex, Text } from '@mantine/core'
import React from 'react'

type ContactCardProps = {
  name?: string
  value: string
  icon: React.ReactNode
}

function ContactCard({ name, value, icon }: ContactCardProps) {
  return (
    <Flex gap={5}>
      {icon}
      {name && <Text>({name})</Text>}
      <Text>{value}</Text>
    </Flex>
  )
}

export default ContactCard
