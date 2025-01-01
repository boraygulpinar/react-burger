import './App.css'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'

function App() {


  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='menu' element={<Menu />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Routes>


      <Footer />
    </div>
  )
}

export default App
