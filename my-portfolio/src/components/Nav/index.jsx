import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './navBarElements'

const Navigation = ({toggle}) => {
    return (  
      <Nav>
          <NavContainer>
            <NavLogo to='/'>ZRZ</NavLogo>  
            <MobileIcon  onClick={toggle}>
              <FaBars />
            </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="resume">Resume</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">Project</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact"> Contact</NavLinks>
            </NavItem>
          </NavMenu>
          </NavContainer>
      </Nav>
    )
}
export default  Navigation
