import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Home />
      <About />
      <Services />
    </div>
  )
}

export default App
