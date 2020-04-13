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
      <body style={{ backgroundColor: "#673ab7"}}>
      <div style={{ backgroundColor: "#673ab7"}} id="container">
            <div id="navi">
              <Particles
                params={{
                  particles: {
                    number: {
                      value: 80
                    },
                    size: {
                      value: 3
                    },
                  },
                  background: {
                    color: {
                      value: "#1834b6"
                    }
                  },
                  interactivity: {
                    events: {
                      onhover: {
                        enable: true,
                        mode: "repulse"
                      }
                    }
                  },
                  line_linked: {
                    color: "#ffffff",
                    opacity: 0.4
                  }
                }}
              >
              </Particles>
              {/* <FloorAnimation color="#ffa600" mode={0} /> */}
            </div>
            <h1 className="centered">Gagan Bhat</h1>
          </div>
        </body>
      </html>

  );
}

export default App;
