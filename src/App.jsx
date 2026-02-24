import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
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
        <Experience />  {/* experience section */}
        <Projects />   {/* projects section */}
        <Contact />   {/* last section */}
      </main>
    </div>
  )
}

export default App