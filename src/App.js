import React from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';
import FloorAnimation from '@wufe/floor-animation';

function App() {
  return (
    
    <html>
      <head>
        <title>Gagan Bhat</title>
      </head>
      <body style={{ backgroundColor: "#ffa600"}}>
      <div style={{ backgroundColor: "#ffa600"}} id="container">
            <div id="navi">
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
              >
              </Particles>
              {/* <FloorAnimation color="#ffa600" mode={0} /> */}
            </div>
            <div className="centered">Bruh</div>
          </div>
        </body>
      </html>

  );
}

export default App;
