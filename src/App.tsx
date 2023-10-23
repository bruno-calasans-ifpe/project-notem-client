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
import Home from './view/Home/Home'
import Register from './view/Register/Register'
import About from './view/About/About'
import Us from './view/About/Us/Us'
import Team from './view/About/Team/Team'
import QA from './view/About/QA/QA'
import Contacts from './view/About/Contacts/Contacts'
import Terms from './view/About/Terms/Terms'
import Privacy from './view/About/Privacy/Privacy'
import AuthHome from './view/Auth/Home/AuthHome'

function App() {
  const { user, login } = useAuthStore((state) => state)

  // mock user
  useEffect(() => {
    // login({
    //   name: 'Test User',
    //   email: 'test@gmail.com',
    //   accountType: 'cliente',
    // })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={user ? <AuthHome /> : <Home />}
          />
          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/about"
            element={<About />}
          >
            <Route
              path="us"
              element={<Us />}
            />

            <Route
              path="team"
              element={<Team />}
            />

            <Route
              path="QA"
              element={<QA />}
            />

            <Route
              path="contacts"
              element={<Contacts />}
            />

            <Route
              path="terms"
              element={<Terms />}
            />

            <Route
              path="privacy"
              element={<Privacy />}
            />
          </Route>
        </Routes>
      </Main>
      <Footer />
    </>
  )
}

export default App
