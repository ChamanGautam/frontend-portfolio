
import './App.css'
import NavBar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div className="nav">
      <NavBar />
    </div>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
