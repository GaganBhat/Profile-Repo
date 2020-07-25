import React from 'react'
import Particles from 'react-particles-js'
import './Projects.css'
import NavBar from '../NavBar'

const particleConfig = () => {
  return (
    <Particles
      params={{
        particles: {
          opacity: 1,
          color: '#ed7e48',
          number: {
            value: 18,
          },
          size: {
            value: 5,
          },
          line_linked: {
            distance: 200,
          },
        },
        background: {
          image: 'linear-gradient(160deg, #d53369, #cbad6d)',
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'repulse',
            },
          },
        },
      }}
    />
  )
}

const Projects = () => {
  return (
    <div>
      <div id="particles">
        {particleConfig()}
      </div>
      <NavBar/>
    </div>
  )
}

export default Projects