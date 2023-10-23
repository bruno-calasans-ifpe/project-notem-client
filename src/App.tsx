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
import Home from './view/Home/Home'
import Register from './view/Register/Register'

function App() {
  const { user } = useAuthStore((state) => state)
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          ></Route>
          <Route
            path="/register"
            element={<Register />}
          ></Route>
        </Routes>
      </Main>
      <Footer />
    </>
  )
}

export default App
