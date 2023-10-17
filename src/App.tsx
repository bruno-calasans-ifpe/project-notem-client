/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unescaped-entities */

// React
import { Routes, Route } from 'react-router'

// Layout
import Header from './layout/Header/Header'
import Main from './layout/Main/Main'
import Footer from './layout/Footer/Footer'

// Views
import About from './view/About/About'
import Us from './view/About/Us/Us'
import Team from './view/About/Team/Team'
import QA from './view/About/QA/QA'
import Terms from './view/About/Terms/Terms'
import Privacy from './view/About/Privacy/Privacy'

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
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
