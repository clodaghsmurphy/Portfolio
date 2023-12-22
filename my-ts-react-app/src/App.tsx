import React from 'react';
import logo from './avatar.png';
import './css/App.css';
import Home from './pages/Home';
import SocialIcons from './components/SocialIcons';
import Skills from './pages/Skills';
import { useEffect } from 'react';
import { useState } from 'react';
import About from './pages/About';

function App() {
    const ScrollProgress = () => {
        const [scrollProgress, setScrollProgress] = useState(0);

        useEffect(() => {
            console.log('scrollProgress', scrollProgress);
            const handleScroll = () => {
                const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
                const currentScroll = window.scrollY;
                const progress = (currentScroll / totalHeight) * 100;
                setScrollProgress(progress);
            };

            // Add event listener to track scroll position
            window.addEventListener('scroll', handleScroll);

            // Cleanup the event listener on component unmount
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);
    };
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
