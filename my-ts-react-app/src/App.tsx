import React from 'react';
import logo from './avatar.png';
import './css/App.css';
import Home from './pages/Home';
import SocialIcons from './components/SocialIcons';

function App() {
  return (
    <div className="App">
        <SocialIcons/>
        <Home />
    </div>
  );
}

export default App;
