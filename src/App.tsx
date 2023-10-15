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
import AboutUs from './view/About/AboutUs/AboutUs'
import Team from './view/About/Team/Team'
import RulesRecommendations from './view/About/RulesRecommendations/RulesRecommendations'

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
              path="about-us"
              element={<AboutUs />}
            />

            <Route
              path="team"
              element={<Team />}
            />

            <Route
              path="rules-recommendations"
              element={<RulesRecommendations />}
            />
          </Route>
        </Routes>
      </Main>
      <Footer />
    </>
  )
}

export default App
