import ReactLenis from 'lenis/react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Programs from './pages/Programs'
import GovernmentSchemes from './pages/GovernmentSchemes'
import Training from './pages/Training'

const App = () => {
  return (
    <ReactLenis root options={{ duration: 1.2 }} >
      <div >
      <Navbar />
      <Home />
      <About />
      <Services />
      <Programs />
      <GovernmentSchemes />
      <Training />
    </div>
    </ReactLenis>
  )
}

export default App
