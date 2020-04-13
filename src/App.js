import React from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';
import FloorAnimation from '@wufe/floor-animation';

function App() {
  return (
    <body style={{ backgroundColor: "#ffa600" }}>
        <div className="App">
          <Particles
            params={{
              particles: {
                number: {
                  value: 50
                },
                size: {
                  value: 3
                },
                color: {
                  value: "#000000"
                }
              },
              background: {
                color: {
                  value: "#ffa600"
                }
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse"
                  }
                }
              }
            }}
          />
          <FloorAnimation color="#ffa600" mode={0} />
        </div>
      </body>

  );
}

export default App;
