import React from 'react';
import logo from './avatar.png';
import './css/App.css';
import Home from './pages/Home';
import SocialIcons from './components/SocialIcons';
import Skills from './pages/Skills';
import { useEffect } from 'react';
import { useState } from 'react';
import About from './pages/About';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function App() {
   

  return (
    <div className="App">

        <SocialIcons/>
        <Home />
        <About />
        <Skills />
    </div>
  );
}

export default App;
