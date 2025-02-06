import React from 'react';
import './index.css';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Myskills from './components/Myskills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Projects from './components/Projects';


function App() {
  return (
    <>
    <NavBar />
    <Home />
    <About />
    <Experience />
    <Projects />
    <Myskills />
    <Contact />
    <SocialLinks />
  </>
  );
}

export default App;
