import React from 'react'
import './header.css'
import Name from './Name'
import {Particles} from 'react-tsparticles'
import LandingContainer from './LandingElements'

const Header = () => {
    const particlesInit = (main) => {
        console.log(main)
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
      const particlesLoaded = (container) => {
        console.log(container);
      };

    return (<> 
    
  <LandingContainer>
      <Name id='name'/>
  </LandingContainer>

{/*       
  

export default Header
