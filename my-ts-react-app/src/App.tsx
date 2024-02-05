import React from 'react';
import logo from './avatar.png';
import './css/App.css';
import './css/global.css';
import Home from './pages/Home';
import SocialIcons from './components/SocialIcons';
import Skills from './pages/Skills';
import { useEffect } from 'react';
import { useState } from 'react';
import About from './pages/About';
import './css/Home.css'; 
import Work from './pages/Work';
import Contact from './pages/Contact';
import Header from './pages/Header';
import Banner from './pages/Banner';
import Nav from './pages/Nav';
import BlurRotate from './components/BlurRotate';
import Projects from './pages/Projects';

function App() {
   

  return (
    <div className="App">
        < BlurRotate />
        <Header />
        <Banner />
        <Nav />
        <About />
        <Work />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
