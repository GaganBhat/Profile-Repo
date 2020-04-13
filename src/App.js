import React from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMailchimp,
    faGithub,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    
    <html>
      <head>
        <title>Gagan Bhat</title>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" 
              rel="stylesheet" 
              integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" 
              crossorigin="anonymous">
        </link>
      </head>
      <body style={{ backgroundColor: "#673ab7"}}>
      <div style={{ backgroundColor: "#673ab7"}} id="container">
            <div id="navi">
            <FontAwesomeIcon className="lefticon" icon={faInstagram} color="#ffffff" size="2x"/>
            <FontAwesomeIcon className="centericon" icon={faGithub} color="#ffffff" size="2x"/>
            <FontAwesomeIcon className="righticon" icon={faMailchimp} color="#ffffff" size="2x"/>
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
