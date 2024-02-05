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
import Helmet from 'react-helmet';

function App() {
   

  return (
    <div className="App">
        <Helmet >
            <script>
                {`(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-52JL2F5M');`}
                </script>
              <noscript>
                 {`<iframe
                      src="https://www.googletagmanager.com/ns.html?id=GTM-52JL2F5M"
                      height="0"
                      width="0"
                      style={{ display: 'none', visibility: 'hidden' }}
                  />`}
              </noscript>
        </Helmet>
        < BlurRotate />
        <Header />
        <Banner />
        <About />
        <Work />
        <Projects />
    </div>
  );
}

export default App;
