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

const TITLE = "FireBase Test"

function App() {
  let numParticles = 18;

  return (
    <div className="App">
      <div id="particles">
        <Particles
          params={{
            particles: {
              opacity: 1,
              color: "#ed7e48",
              number: {
                value: numParticles
              },
              size: {
                value: 5
              },
              line_linked: {
                distance: 200,
              }
            },
            background: {
              image: "linear-gradient(160deg, #d53369, #cbad6d)"
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
      </div>
      <div className="mainflex">
        <h1 className="centered" style={{ top: '-55px', color: '#ffffff' }}>Gagan Bhat</h1>
        <ul id="nav-links">
          <li>
            <FontAwesomeIcon className="icon" cursor="grab" icon={faLinkedin} color="#ffffff" size="2x" onClick={handleLinkedin} />
          </li>
          <li>
            <FontAwesomeIcon className="icon" cursor="grab" icon={faGithub} color="#ffffff" size="2x" onClick={handleGithub} />
          </li>
          <li>
            <FontAwesomeIcon className="icon" cursor="grab" icon={faEnvelope} color="#ffffff" size="2x" onClick={handleMail} />
          </li>
        </ul>
      </div>

    </div>
  );
}


export default App;
