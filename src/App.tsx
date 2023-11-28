/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unescaped-entities */

// React
import { Routes, Route } from 'react-router'

// Layout
import { useEffect } from 'react'
import Header from './layout/Header/Header'
import Main from './layout/Main/Main'
import Footer from './layout/Footer/Footer'
import useAuthStore from './store/useAuthStore'

// Views
import AuthHome from './view/Auth/Home/AuthHome'
import Beach from './view/Auth/Beach/Beach'
import Catalog from './view/Auth/Catalog/Catalog'

function App() {
  const { user, login } = useAuthStore((state) => state)

  // mock user
  useEffect(() => {
    login({
      name: 'Test User',
      email: 'test@gmail.com',
      accountType: 'cliente',
    })
  }, [])

  return (
    <>
      <Header />
      <Main>
        <Routes>
          {user && (
            <>
              <Route
                path="/"
                element={<AuthHome />}
              />
              <Route
                path="/beach/:beachId"
                element={<Beach />}
              />
              <Route
                path="/vendor/:vendorId"
                element={<Catalog />}
              />
            </>
          )}
        </Routes>
      </Main>
      <Footer />
    </>
  )
}

export default App
