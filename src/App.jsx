import ReactLenis from 'lenis/react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Programs from './pages/Programs'
import GovernmentSchemes from './pages/GovernmentSchemes'
import Training from './pages/Training'
import Partners from './pages/Partners'
import Leadership from './pages/Leadership'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import Footer from './pages/Footer'



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
      <Partners />
      <Leadership />
      <Faq />
      <Contact />
      <Footer/>
    </div>
    </ReactLenis>
  )
}

export default App
