import React from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';
import FloorAnimation from '@wufe/floor-animation';

function App() {
  return (
    <div className="App"> 
          <FloorAnimation
            color="#ffa600"
            mode={0}
          />
   
    </div> 

  );
}

export default App;