import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, LinkContainer} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <LinkContainer>
                    <SidebarLink to='about' onClick={toggle}>
                        About
                    </SidebarLink>
                    </LinkContainer>
                    <LinkContainer>
                    <SidebarLink to='resume' onClick={toggle} >
                        Resume
                    </SidebarLink>
                    </LinkContainer>
                    <LinkContainer>
                    <SidebarLink to='projects' onClick={toggle}>
                        Projects
                    </SidebarLink>
                    </LinkContainer>
                    <LinkContainer>
                    <SidebarLink to='contact' onClick={toggle}>
                        Contact
                    </SidebarLink>
                    </LinkContainer>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
