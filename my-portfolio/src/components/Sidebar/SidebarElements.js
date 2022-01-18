import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll'


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3 ease-in-ease-out;
    opacity: ${({isOpen }) => (isOpen ? '100%' : '0')}; 
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`
export const CloseIcon = styled(FaTimes)`
    color: #fff;
`
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    outline: none;
`
export const SidebarWrapper = styled.div`
    color: #fff;
`
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    
    
    @media screan and (max-width: 480px) {
        grid-template-rows: repeat(4, 60px);
    }
`
export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: .2s ease-in-ease-out;
    color: #fff;
    cursor: pointer;
    &:hover{
        color: red;
        transition: 0.2s ease-in-out;
    }   
`

export const LinkContainer = styled.div`
    padding: 0px;
    width: 20%;
    height: 50px;
    margin: 0px;
    justify-self: center;
    align-items: center;

    &:hover{
    background: -webkit-linear-gradient(0deg, #fa130f, #ff14ad, #00FFFF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
`
