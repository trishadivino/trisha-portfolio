import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />      {/* fixed on top */}
      <main>
        <Home />      {/* first section */}
        <About />     {/* second section */}
        <Education /> {/* education section */}
        <Projects />  {/* third section */}
        <Contact />   {/* last section */}
      </main>
    </div>
  )
}

export default App