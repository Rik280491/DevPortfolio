import React from 'react';
import './App.css';
import LandingPage from './components/landing-page/LandingPage'
import CVContainer from './components/cv/CVContainer';

function App() {
  return (
    <div className="App">
      <LandingPage/>
      <CVContainer/>
    </div>
  );
}

export default App;
