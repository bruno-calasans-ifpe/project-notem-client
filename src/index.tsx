/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
// React
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// mantine
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'

// styled components
import GlobalStyle from './styles/global.style'

// main component
import App from './App'

// import { mountStoreDevtool } from 'simple-zustand-devtools'
// import useAuthStore from './store/useAuthStore'
// mountStoreDevtool('authstore', useAuthStore)

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <>
    <MantineProvider>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </>,
)
