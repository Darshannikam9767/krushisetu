import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Programs from './pages/Programs'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Programs />
    </div>
  )
}

export default App
