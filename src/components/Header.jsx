import React from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  
  width: 100%;
  padding:15px 0;
  background-color: rgb(255,255,255,0.01);
  backdrop-filter:blur(20px);
  color: #fff;
  z-index: 100;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
`;

const Logo = styled.h1`
  font-size: 2em;
  span{
    color:orange;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  
`;

const NavLinkItem = styled.li`&:first-child {
  border-bottom:1px solid red;
}`;

const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size:14px;
  letter-spacing:1px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: orangered;
    
  }
`;



const navLinksData = [
    { title: 'HOME', href: '/' },
    { title: 'WORK', href: '/work' },
    { title: 'TECHNOLOGY', href: '/technology' },
    { title: 'SERVICES', href: '/services' },
    { title: 'COMPANY', href: '/company' },
    { title: 'CONTACTS', href: '/contacts' },
  ];
const Header = () => {
  return (
    <NavbarWrapper>
      <Container>
        <Logo >Geeks <span>Invention</span></Logo>
        <NavLinks>
        {navLinksData.map((link, index) => (
            <NavLinkItem key={index}>
              <NavLink href={link.href}>{link.title}</NavLink>
            </NavLinkItem>
          ))}
        </NavLinks>
      </Container>
    </NavbarWrapper>
  );
};

export default Header;
