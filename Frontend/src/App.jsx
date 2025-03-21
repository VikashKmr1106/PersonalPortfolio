import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

import Navbar from './component/Navbar.jsx';
import Footer from './component/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App