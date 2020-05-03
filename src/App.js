import React from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
import {
    faEnvelope
  } from "@fortawesome/free-regular-svg-icons"

import { Helmet } from 'react-helmet'

function handleLinkedin(){
  window.open("https://www.linkedin.com/in/gagan-bhat/", '_blank');
}

function handleGithub() {
  window.open("https://github.com/GaganBhat", '_blank');
}

function handleMail() {
  window.open("mailto:gaganbhat6@gmail.com", '_blank');
}

const TITLE = "Gagan Bhat"

function App() {
  return (
    
    <html>
      <head>
        <Helmet>
            <title>{ TITLE }</title>
        </Helmet>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" 
              rel="stylesheet" 
              integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" 
              crossorigin="anonymous">
        </link>
      </head>
      <body>
      <div id="container">
            <div id="navi">
              <Particles
                params={{
                  particles: {
                    number: {
                      value: 40
                    },
                    size: {
                      value: 3
                    },
                  },
                  background: {
                    image: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)"
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
                    opacity: 0.1
                  }
                }}
              >
              </Particles>
              
              <div className="mainflex">
                <h1 className="centered">Gagan Bhat</h1>            
                <ul id="nav-links">
                  <li>
                    <FontAwesomeIcon className="icon" icon={faLinkedin} color="#ffffff" size="2x" onClick={handleLinkedin}/>
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faGithub} color="#ffffff" size="2x" onClick={handleGithub}/>
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faEnvelope} color="#ffffff" size="2x"onClick={handleMail}/>
                  </li>
                </ul>
                
              </div>
            </div>
          </div>
        </body>
      </html>

  );
  
}


export default App;
