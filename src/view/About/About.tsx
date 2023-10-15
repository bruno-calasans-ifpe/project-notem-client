import { Flex, Tabs } from '@mantine/core'
import { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router'

const tabs = ['about-us', 'team', 'rules-recommendations', 'terms', 'privacy'] as const
type PossibleTabs = (typeof tabs)[number]

function About() {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<PossibleTabs>('about-us')

  useEffect(() => {
    // getting hash from url without hashtag
    const hash = location.hash.replace('#', '') as PossibleTabs

    // checking is a valid hash
    if (tabs.includes(hash)) {
      // changing active tab
      setActiveTab(hash)
    }
  }, [location.hash])

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <Flex>
      <Tabs
        value={activeTab}
        onChange={(value) => navigate(`${value}`)}
      >
        <Tabs.List grow>
          <Tabs.Tab value={tabs[0]}>Sobre nós</Tabs.Tab>
          <Tabs.Tab value={tabs[1]}>Nossa Equipe</Tabs.Tab>
          <Tabs.Tab value={tabs[2]}>Regras e Recomendações</Tabs.Tab>
          <Tabs.Tab value={tabs[3]}>Termos</Tabs.Tab>
          <Tabs.Tab value={tabs[4]}>Privacidade</Tabs.Tab>
        </Tabs.List>
        <Flex>
          <Outlet />
        </Flex>
      </Tabs>
    </Flex>
  )
}

export default About
