import { Flex, Tabs } from '@mantine/core'
import { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router'

const tabs = ['us', 'team', 'QA', 'contacts', 'terms', 'privacy'] as const
type PossibleTabs = (typeof tabs)[number]

function About() {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<PossibleTabs>('us')

  useEffect(() => {
    // getting hash from url without hashtag
    const pathname = location.pathname.replace('/about/', '') as PossibleTabs

    if (tabs.includes(pathname)) {
      setActiveTab(pathname)
    }
  }, [location.pathname])

  const changeTabHandler = (value: PossibleTabs) => {
    setActiveTab(value)
    navigate(value)
  }

  return (
    <Flex>
      <Tabs
        value={activeTab}
        onChange={changeTabHandler}
      >
        <Tabs.List grow>
          <Tabs.Tab value={tabs[0]}>Sobre nós</Tabs.Tab>
          <Tabs.Tab value={tabs[1]}>Nossa Equipe</Tabs.Tab>
          <Tabs.Tab value={tabs[2]}>Perguntas Frequentes</Tabs.Tab>
          <Tabs.Tab value={tabs[3]}>Contatos</Tabs.Tab>
          <Tabs.Tab value={tabs[4]}>Termos</Tabs.Tab>
          <Tabs.Tab value={tabs[5]}>Privacidade</Tabs.Tab>
        </Tabs.List>
        <Flex>
          <Outlet />
        </Flex>
      </Tabs>
    </Flex>
  )
}

export default About
