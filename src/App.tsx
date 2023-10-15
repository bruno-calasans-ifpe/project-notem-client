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

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/about"
            element={<About />}
          ></Route>
        </Routes>
      </Main>
      <Footer />
    </>
  )
}

export default App
