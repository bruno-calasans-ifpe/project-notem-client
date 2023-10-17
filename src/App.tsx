/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unescaped-entities */

// React
import { Routes, Route } from 'react-router'

// Layout
import Header from './layout/Header/Header'
import Main from './layout/Main/Main'
import Footer from './layout/Footer/Footer'
import useAuthStore from './store/useAuthStore'

// Views

function App() {
  const { user } = useAuthStore((state) => state)
  return (
    <>
      <Header />
      <Main>
        <Routes></Routes>
      </Main>
      <Footer />
    </>
  )
}

export default App
