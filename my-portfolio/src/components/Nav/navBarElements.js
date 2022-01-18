import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

//margin-top: -80px;

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky; 
    top: 0;
    z-index: 10;

    @media screen and (max-widthL 960px){
        transition: 0.8s all ease;
    }
`
export const NavContainer = styled.div`
    display: flex; 
    justify-content: space-between;
    height: 80px;
    z-index: 1; 
    width: 100%;
    padding: 0 24px;
    max-width: 11000px;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    curser: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    &:hover{
        background: -webkit-linear-gradient(0deg, #fa130f, #ff14ad, #00FFFF);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        }
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        color: #fff;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8 rem;
        cursor: pointer;
    }
`
export const NavMenu = styled.ul`
    display: flex;
    text-decoration: none;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 760px){
        display: none;
    }
`
export const NavItem = styled.li`
    height: 80px; 
`
 
export const NavLinks = styled(LinkS)`
  
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover{
        background: -webkit-linear-gradient(0deg, #fa130f, #ff14ad, #00FFFF);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        }
    
    &.active(
        border-bottom: 3px solid #000;
    )
`