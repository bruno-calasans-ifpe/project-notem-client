/* eslint-disable react/no-unescaped-entities */

// Layout
import Header from './layout/Header/Header'
import Main from './layout/Main/Main'
import Footer from './layout/Footer/Footer'

// Views
import Home from './view/Home/Home'

function App() {
  return (
    <>
      <Header />
      <Main>
        <Home />
      </Main>
      <Footer />
    </>
  )
}

export default App
