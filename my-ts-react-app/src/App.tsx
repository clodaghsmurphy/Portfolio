import React from 'react';
import logo from './avatar.png';
import './css/App.css';
import Home from './pages/Home';
import SocialIcons from './components/SocialIcons';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="App">
        <SocialIcons/>
        <Home />
        <Skills />
    </div>
  );
}

export default App;
