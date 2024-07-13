import React from 'react';
import './index.css';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';


function App() {
  return (
    <div className="">
      <NavBar/>
      <Home/>
      <About/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
    
    </div> 
  );
}

export default App;
