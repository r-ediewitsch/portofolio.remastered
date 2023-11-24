import React from "react";
import {Link as LinkR} from "react-router-dom";
import styled, { useTheme } from "styled-components";
import {FaAnglesUp, FaBars} from "react-icons/fa6";

const Nav = styled.div`
    background-color: ${({ theme }) => theme.card};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: lrem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
    width: 80%;
    padding: 0 6px;
    display: flex;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    @media screen and (max-width: 640px){
        padding: 0 0px;
    }
`;

const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 840px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 50%);
        font-size: 1.5rem;
        cursor: pointer;
        color: ${({theme}) => theme.text};
    }
`;

const NavItems = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 65px;
    list-style: none;
    @media screen and (max-width: 840px){
        display: none;
    }
`;

const NavLink = styled.a`
    color: ${({theme}) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover{
        color: ${({theme}) => theme.primary};
    }
`;

export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 20px;
`;

const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({theme}) => theme.card};
    transition: all 0.3s ease-in-out;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    border-radius: 0 0 20 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    opacity: ${({open}) => open ? '1' : '0'};
    z-index: ${({open}) => open ? '1' : '-1'};
`;

const MobileMenuLinks = styled.a`
    color: ${({theme}) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover{
        color: ${({theme}) => theme.primary}
    }
`;

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    return (
    <Nav>
        <NavContainer>
            <NavLogo>
                <a
                    style={{
                        display: "flex",
                        alignItems: "center",
                        color: "black",
                        marginBottom: "20;",
                        cursor: "pointer",
                    }}
                >
                   <FaAnglesUp size="2.5rem" /> <Span>EDIEWITSCH</Span> 
                </a>
            </NavLogo>
            <MobileIcon>
                <FaBars
                    onClick={() => {
                        setOpen(!open);
                    }}
                />
            </MobileIcon>
            <NavItems>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#skills">Skills</NavLink>
                <NavLink href="#experience">Experience</NavLink>
                <NavLink href="#projects">Projects</NavLink>
                <NavLink href="#education">Education</NavLink>
                <NavLink onClick={() => window.location.href="/tumbal"}>Route</NavLink>
            </NavItems>
        </NavContainer>
        {
            open && (
                <MobileMenu open={open}>
                    <MobileMenuLinks
                        href="#about"
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        About
                    </MobileMenuLinks>
                    
                    <MobileMenuLinks
                        href="#skills"
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        Skills
                    </MobileMenuLinks>

                    <MobileMenuLinks
                        href="#experience"
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        Experience
                    </MobileMenuLinks>

                    <MobileMenuLinks
                        href="#projects"
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        Projects
                    </MobileMenuLinks>

                    <MobileMenuLinks
                        href="#education"
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        Education
                    </MobileMenuLinks>
                </MobileMenu>
            )
        }
    </Nav>
    );
};

export default Navbar;